import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";
import course4 from "../assets/course4.png";

// Sample data for courses
const courses = [
  {
    id: 1,
    title: "Introduction to CSS language",
    description:
      "Learn the basics of CSS, and its usefulness in the programming world",
    author: "ATO",
    price: 29,
    image: course1,
  },
  {
    id: 2,
    title: "Introduction to Python language",
    description:
      "Learn the basics of Python, and its usefulness in the programming world",
    author: "ATO",
    price: 30,
    image: course2,
  },
  {
    id: 3,
    title: "Introduction to JavaScript language",
    description:
      "Learn the basics of JavaScript, and its usefulness in the programming world",
    author: "ATO",
    price: 50,
    image: course3,
  },
  {
    id: 4,
    title: "Introduction to HTML language",
    description:
      "Learn the basics of HTML, and its usefulness in the programming world",
    author: "ATO",
    price: 34,
    image: course4,
  },
];

const CoursesGrid = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-5">{course.title}</h3>
              <p className="text-gray-600 mb-5">{course.description}</p>
              <div className="flex justify-between items-center border-t border-gray-200 pt-5">
                <p className="text-gray-700">By {course.author}</p>
                <p className="text-lg font-bold">${course.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default CoursesGrid