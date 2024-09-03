import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

// Create a new context
const AuthContext = createContext();

// Custom hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  // State variables
  const [user, setUser] = useState(null); // Store current user
  const [userData, setUserData] = useState(null); // Store Firestore user data

  // useEffect hook to listen for authentication state changes
  useEffect(() => {
    // Subscribe to the onAuthStateChanged event
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser); // Update the user state

      if (currentUser) {
        // If a user is logged in, fetch their data from Firestore
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data()); // Store user data in state
        } else {
          console.error("No user data found!");
        }
      } else {
        setUserData(null); // Reset user data state
      }
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  // Render the AuthContext.Provider component with the provided children
  return (
    <AuthContext.Provider value={{ user, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
