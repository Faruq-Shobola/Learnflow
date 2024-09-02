import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null); // Store Firestore user data

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data()); // Store user data in state
        } else {
          console.error("No user data found!");
        }
      } else {
        setUserData(null);
      }
    });
    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, userData }}>{children}</AuthContext.Provider>
  );
};
