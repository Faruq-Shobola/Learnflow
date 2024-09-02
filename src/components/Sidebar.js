import { Link } from "react-router-dom";
import Book from "../assets/icons/book.png";
import Dashboard from "../assets/icons/element.png";
import Setting from "../assets/icons/setting-2.png";
import Edit from "../assets/icons/edit.png";
import Frame from "../assets/icons/frame.png";

const Sidebar = () => {
  return (
    <div className="bg-white h-screen w-60 p-4 shadow fixed">
      <div className="text-lg font-bold mb-8">
        <Link to="/">LearnFlow</Link>
      </div>
      <ul>
        <li className="flex gap-4 mb-4 text-black hover:bg-black hover:text-white rounded-md transition">
          <Link to="/" className="flex items-center px-1.5 py-3">
            <img src={Dashboard} alt="Dashboard" className="w-6 h-6" />
            <span className="ml-2">Dashboard</span>
          </Link>
        </li>
        <li className="flex gap-4 mb-4 text-black hover:bg-black hover:text-white rounded-md transition">
          <Link to="/courses" className="flex items-center px-1.5 py-3">
            <img src={Book} alt="Courses" className="w-6 h-6" />
            <span className="ml-2">All courses</span>
          </Link>
        </li>
        <li className="flex gap-4 mb-4 text-black hover:bg-black hover:text-white rounded-md transition">
          <Link to="/new-course" className="flex items-center px-1.5 py-3">
            <img src={Edit} alt="Course Builder" className="w-6 h-6" />
            <span className="ml-2">Course Builder</span>
          </Link>
        </li>
        <li className="flex gap-4 mb-4 text-black hover:bg-black hover:text-white rounded-md transition">
          <Link to="/settings" className="flex items-center px-1.5 py-3">
            <img src={Setting} alt="Settings" className="w-6 h-6" />
            <span className="ml-2">Settings</span>
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <img src={Frame} alt="Log out" className="w-6 h-6" />
            <span className="ml-2">Log out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
