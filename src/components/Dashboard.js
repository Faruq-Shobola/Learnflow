import CoursesGrid from "./CoursesGrid"; // Importing the CoursesGrid component
import course1 from "../assets/course1.png"; // Importing the image for course1
import course2 from "../assets/course3.png"; // Importing the image for course2
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom

// Sample data for "Continue Learning" courses
const continueLearningCourses = [
  {
    id: 1,
    title: "Introduction to CSS language",
    description: "Learn different programming languages and its usefulness",
    image: course2, // Using the imported image for course2
  },
  {
    id: 2,
    title: "Introduction to JavaScript language",
    description: "Learn different programming languages and its usefulness",
    image: course1, // Using the imported image for course1
  },
];

const Dashboard = () => {
  return (
    <div className="mx-auto flex flex-col gap-14 mt-8">
      <div className="flex flex-col gap-5">
        {/* Welcome Section */}
        <div className="border-b border-gray-300 pb-10">
          <h1 className="text-3xl font-bold">Welcome to Learnflow</h1>
          <p className="text-gray-600 mt-2">
            Learn at your own pace with lifetime access on mobile and desktop.
          </p>
        </div>

        {/* Continue Learning Section */}
        <div className="w-full mt-2">
          <h2 className="text-2xl font-semibold mb-4">
            Let's continue Learning!
          </h2>
          <div className="flex flex-wrap gap-6 lg:flex-nowrap">
            {continueLearningCourses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full sm:w-40 h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-gray-600 mt-2">{course.description}</p>
                  {/* Progress Bar */}
                  <div className="mt-4 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primaryyellow h-2 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {/* Language Courses Section */}
        <div className="">
          <h2 className="text-2xl font-semibold mb-4">Language Courses</h2>
          <p className="text-gray-600">
            Choose from one over many of course and learn with industry leading
            experts.
          </p>
        </div>
        {/* Add language course components here */}
        <CoursesGrid />
        <div className="flex items-center justify-center mt-5">
          <Link
            to="/courses"
            className="px-5 text-center bg-primaryyellow hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg"
          >
            View all courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
