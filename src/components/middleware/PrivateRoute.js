import { Navigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

// PrivateRoute component
const PrivateRoute = ({ children }) => {
  // Get the user from the AuthContext
  const { user } = useAuth();

  // If user is not authenticated, redirect to the login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user is authenticated, render the children components
  return children;
};

export default PrivateRoute;
