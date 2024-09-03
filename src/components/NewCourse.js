import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddCourseModal from "../components/AddCourseModal";

// Define a functional component called NewCourse
const NewCourse = () => {
  // Define a state variable called showModal and its setter function setShowModal
  const [showModal, setShowModal] = useState(false);

  // Define a function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Render the component
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-5">Create a new course</h2>
      <div
        className="flex justify-center items-center w-full h-96 md:w-[551px] md:h-[358px] bg-white rounded-md p-5"
        onClick={() => setShowModal(true)}
      >
        <div className="bg-black rounded-full p-2">
          <span className="text-lg font-semibold text-white">
            <FaPlus />
          </span>
        </div>
      </div>
      {showModal && <AddCourseModal closeModal={handleCloseModal} />}
    </div>
  );
};

// Export the NewCourse component as the default export of the module
export default NewCourse;
