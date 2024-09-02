import CoursesGrid from "./CoursesGrid";

const AllCourses = () => {
  return (
    <div className="mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6">Courses</h2>
      <p className="text-gray-600 mb-10">
        Unlock the world of web development effortlessly with our innovative
        e-learning courses. Elevate your skills, build a dynamic portfolio, and
        launch your web development or no-code career with our industry-aligned
        certifications and dedicated job placement assistance.
      </p>
      <CoursesGrid />
    </div>
  );
};

export default AllCourses;
