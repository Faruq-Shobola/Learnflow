import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const CoursesGrid = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesCollectionRef = collection(db, "courses");
        const coursesSnapshot = await getDocs(coursesCollectionRef); // Fetch all documents from "courses" collection
        const coursesList = coursesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCourses(coursesList); // Update state with fetched courses
      } catch (error) {
        console.error("Error fetching courses:", error.message);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300"
        >
          <Link to={`/courses/${course.id}`}>
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-5">{course.title}</h3>
              <p className="text-gray-600 mb-5 truncate ...">
                {course.description}
              </p>
              <div className="flex justify-between items-center border-t border-gray-200 pt-5">
                <p className="text-gray-700 font-medium">
                  By {course.author || "ATO"}
                </p>
                <p className="text-lg font-bold">${course.price}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CoursesGrid;
