import { Navigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const RestrictedRoute = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default RestrictedRoute;
