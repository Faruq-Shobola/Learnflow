import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const AddCourseModal = ({ closeModal }) => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseImage, setCourseImage] = useState(null);
  const [price, setPrice] = useState(0.0);

  const handleImageChange = (e) => {
    setCourseImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-25 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={() => closeModal()}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <FaTimes />
        </button>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Course Title Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Course Title</label>
            <input
              type="text"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Add course title"
            />
          </div>

          {/* Course Description Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Course Description</label>
            <input
              type="text"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Add course description"
            />
          </div>

          {/* Course Image Upload */}
          <div className="mb-4">
            <label className="block text-gray-700">Course Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Price Input */}
          <div className="mb-6">
            <label className="block text-gray-700">Add Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="0.00"
              step="5"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-transparent text-white hover:text-black border border-black font-semibold py-2 rounded-md"
          >
            Save Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
