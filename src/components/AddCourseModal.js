import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import { useNavigate } from "react-router-dom";

const AddCourseModal = ({ closeModal }) => {
  // State variables
  const [loading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: 0,
    imageUrl: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  // Handle file change
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let imageUrl = "";
      if (imageFile) {
        // Upload image to Firebase Storage
        const imageRef = ref(storage, `course-images/${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
        // Get URL after upload
        imageUrl = await getDownloadURL(imageRef);
      }

      // Update course data with the image URL
      const newCourseData = {
        ...courseData,
        imageUrl: imageUrl,
      };

      // Add course to Firestore with image URL
      await addDoc(collection(db, "courses"), newCourseData);

      alert("Course added successfully!");
      // Navigate to courses page after adding
      navigate("/courses");
    } catch (error) {
      console.error("Error adding course:", error.message);
      alert("Failed to add course. Please try again.");
    }
    setLoading(false);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-25 flex items-center justify-center px-8">
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
              name="title"
              value={courseData.title}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Add course title"
              required
            />
          </div>

          {/* Course Description Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Course Description</label>
            <input
              type="text"
              name="description"
              value={courseData.description}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Add course description"
              required
            />
          </div>

          {/* Course Image Upload */}
          <div className="mb-4">
            <label className="block text-gray-700">Course Image</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Price Input */}
          <div className="mb-6">
            <label className="block text-gray-700">Add Price</label>
            <input
              type="number"
              name="price"
              value={courseData.price}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="0.00"
              step="5"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`block w-full rounded-md  px-5 py-3 text-sm font-medium text-white hover:text-black border  ${
              loading ? `bg-gray-300 border-gray-300` : `bg-black border-black`
            }`}
            disabled={loading}
          >
            Save Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
