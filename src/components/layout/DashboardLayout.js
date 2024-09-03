import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

// Define the DashboardLayout component
const DashboardLayout = () => {
  return (
    // Main container with a flex layout and gray background
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar component */}
      <Sidebar />

      {/* Main content container */}
      <div className="flex flex-col flex-grow">
        {/* Navbar component */}
        <Navbar />

        {/* Content area */}
        <div className="md:ml-60">
          {/* Container for the main content */}
          <div className="px-10 py-5 max-w-screen-xl mx-auto w-full">
            {/* Render the child components */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the DashboardLayout component as the default export
export default DashboardLayout;
