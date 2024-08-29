import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <div className="">
          <div className="px-10 py-5 max-w-screen-xl mx-auto w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
