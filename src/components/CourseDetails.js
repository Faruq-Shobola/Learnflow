import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseDocRef = doc(db, "courses", courseId);
        const courseDoc = await getDoc(courseDocRef);
        if (courseDoc.exists()) {
          setCourse(courseDoc.data());
        } else {
          console.error("Course not found!");
        }
      } catch (error) {
        console.error("Error fetching course:", error.message);
      }
    };

    fetchCourse();
  }, [courseId]);

  return (
    <div className="flex flex-col gap-8 mt-8">
      <Link to="/courses" className="flex gap-4 items-center">
        <FaArrowLeft />
        <span className="text-black text-xl font-semibold">Back to Courses</span>
      </Link>
      <div className="w-full">
        <img
          src={course?.imageUrl}
          alt={course?.title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <div className="flex">
        <div className="w-3/5 pr-8">
          <h2 className="mt-6 text-2xl font-semibold">{course?.title}</h2>
          <p className="mt-4 text-gray-600">{course?.description}</p>
        </div>

        {/* Right Content - Course Details */}
        <div className="w-2/5 ">
          <div className="bg-white p-8 rounded-2xl border border-gray-300">
            <h3 className="text-xl font-semibold mb-4">Course Details</h3>
            <ul className="mb-6 ">
              <li className="flex justify-between py-3 border-b border-gray-300">
                <span>Author:</span>
                <span>ATO productions</span>
              </li>
              <li className="flex justify-between py-3 border-b border-gray-300">
                <span>Level:</span>
                <span>Beginner</span>
              </li>
              <li className="flex justify-between py-3 border-b border-gray-300">
                <span>Lessons:</span>
                <span>16</span>
              </li>
            </ul>
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 rounded-full">
              Buy Now
            </button>
          </div>
          <div className="px-8 mt-10">
            <button className="w-full bg-transparent border border-gray-300 hover:bg-gray-300 text-gray-700 font-semibold py-4 rounded-full">
              Next Course
            </button>
          </div>
        </div>
      </div>
      {/* Left Content - Course Info */}
    </div>
  );
};

export default CourseDetail;
