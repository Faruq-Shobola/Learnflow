// src/components/Sidebar.js
import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom"; // Importing necessary components and hooks
import Book from "../assets/icons/book.png"; // Importing the book icon
import Dashboard from "../assets/icons/element.png"; // Importing the dashboard icon
import Setting from "../assets/icons/setting-2.png"; // Importing the settings icon
import Edit from "../assets/icons/edit.png"; // Importing the edit icon
import Frame from "../assets/icons/frame.png"; // Importing the frame icon
import { auth } from "../firebase"; // Importing the auth object from firebase
import { signOut } from "firebase/auth"; // Importing the signOut function from firebase/auth

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility
  const navigate = useNavigate(); // Initializing the useNavigate hook

  // Function to handle logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/"); // Navigating the user to the home page
        alert("Signed out successfully"); // Showing an alert to the user
      })
      .catch((error) => {
        console.error("Error during sign out:", error); // Log error if sign out fails
      });
  };

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="text-white bg-black p-2 rounded-full focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-white h-screen w-60 p-4 shadow fixed transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`} // Show/Hide Sidebar on mobile
      >
        <div className="text-lg font-bold mb-8">
          <Link to="/dashboard">LearnFlow</Link> {/* Link to the dashboard */}
        </div>
        <ul>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? `flex gap-4 mb-4 bg-black text-white rounded-md transition`
                : `flex gap-4 mb-4 text-black hover:bg-black hover:text-white rounded-md transition`
            }
          >
            <div className="flex items-center px-1.5 py-3">
              <img src={Dashboard} alt="Dashboard" className="w-6 h-6" />{" "}
              {/* Dashboard icon */}
              <span className="ml-2">Dashboard</span> {/* Link text */}
            </div>
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? `flex gap-4 mb-4 bg-black text-white rounded-md transition`
                : `flex gap-4 mb-4 text-black hover:bg-black hover:text-white rounded-md transition`
            }
          >
            <div className="flex items-center px-1.5 py-3">
              <img src={Book} alt="Courses" className="w-6 h-6" />{" "}
              {/* Book icon */}
              <span className="ml-2">All courses</span> {/* Link text */}
            </div>
          </NavLink>
          <NavLink
            to="/new-course"
            className={({ isActive }) =>
              isActive
                ? `flex gap-4 mb-4 bg-black text-white rounded-md transition`
                : `flex gap-4 mb-4 text-black hover:bg-black hover:text-white rounded-md transition`
            }
          >
            <div className="flex items-center px-1.5 py-3">
              <img src={Edit} alt="Course Builder" className="w-6 h-6" />{" "}
              {/* Edit icon */}
              <span className="ml-2">Course Builder</span> {/* Link text */}
            </div>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? `flex gap-4 mb-4 bg-black text-white rounded-md transition`
                : `flex gap-4 mb-4 text-black hover:bg-black hover:text-white rounded-md transition`
            }
          >
            <div className="flex items-center px-1.5 py-3">
              <img src={Setting} alt="Settings" className="w-6 h-6" />{" "}
              {/* Settings icon */}
              <span className="ml-2">Settings</span> {/* Link text */}
            </div>
          </NavLink>
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              <img src={Frame} alt="Log out" className="w-6 h-6" />{" "}
              {/* Frame icon */}
              <span className="ml-2">Log out</span> {/* Button text */}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar; // Exporting the Sidebar component
