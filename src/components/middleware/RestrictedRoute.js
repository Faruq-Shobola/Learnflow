import { Navigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

// This component is used to create a restricted route, which redirects the user to the dashboard if they are authenticated,
// otherwise it renders the children components.
const RestrictedRoute = ({ children }) => {
  const { user } = useAuth();

  // If the user is authenticated, redirect them to the dashboard using the Navigate component from react-router-dom.
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // If the user is not authenticated, render the children components.
  return children;
};

export default RestrictedRoute;
