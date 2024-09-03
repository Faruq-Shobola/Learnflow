// Importing the Outlet component from the react-router-dom library
import { Outlet } from "react-router-dom";

// Defining a functional component called AuthLayout
const AuthLayout = () => {
  return (
    // Creating a div element with classes for styling
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg md:max-w-4xl px-4 mx-auto">
        {/* Rendering the Outlet component */}
        <Outlet />
      </div>
    </div>
  );
};

// Exporting the AuthLayout component as the default export
export default AuthLayout;
