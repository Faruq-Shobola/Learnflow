import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  // State variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 underline">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Edit Details Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Edit Details</h3>

          {/* First Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700">First Name (required)</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
              placeholder="First Name"
              required
            />
          </div>

          {/* Last Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Last Name (required)</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
              placeholder="Last Name"
              required
            />
          </div>

          {/* Nickname Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Nickname (required)</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
              placeholder="Nickname"
              required
            />
          </div>
        </div>

        {/* Login Information Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Login Information</h3>

          {/* Current Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700">
              Current Password (required)
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
              placeholder="Current Password"
              required
            />
            <Link
              to="#"
              className="text-black underline text-sm mt-1 inline-block text-right w-full"
            >
              Can't remember password?
            </Link>
          </div>

          {/* Account Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Account Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
              placeholder="Account Email"
              required
            />
          </div>

          {/* New Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Add your new password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
              placeholder="New Password"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700">Confirm new password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        {/* View All Courses Button */}
        <Link
          to="/courses"
          className="w-auto px-5 bg-primaryyellow hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg"
        >
          View all courses
        </Link>
      </form>
    </div>
  );
};

export default EditProfile;
