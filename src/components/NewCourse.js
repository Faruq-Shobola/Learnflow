import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddCourseModal from "../components/AddCourseModal";

const NewCourse = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="flex justify-center items-center w-[551px] h-[358px] bg-white rounded-md p-5"
        onClick={() => setShowModal(true)}
      >
        <div className="bg-black rounded-full p-2">
          <span className="text-lg font-semibold text-white">
            <FaPlus />
          </span>
        </div>
      </div>
      {showModal && <AddCourseModal closeModal={handleCloseModal} />}
    </>
  );
};

export default NewCourse;
