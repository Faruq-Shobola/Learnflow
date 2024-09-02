import React from "react";

const CourseDetail = () => {
  return (
    <div className="flex flex-col p-8">
      <div className="w-full pr-8">
        <img
          src="your-course-image-url.jpg"
          alt="Course"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <div className="flex">
        <div className="w-3/5 pr-8">
          <h2 className="mt-6 text-2xl font-semibold">
            Introduction to CSS language
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Tempus ultrices dui
            vulputate pulvinar risus. Purus lacus tempus mi nibh ligula. Sit in
            blandit eget id dictum. Dignissim tincidunt pharetra habitant mi nec
            curabitur et justo. Tristique massa est magna auctor iaculis diam
            mauris rhoncus. Justo dignissim odio dolor tortor adipiscing. Non
            volutpat lacinia arcu elit dignissim at. Magna dolor fermentum ac
            morbi. Vitae curabitur lacinia natoque turpis enim donec
            pellentesque. Varius convallis sed ullamcorper nisl ligula pharetra.
            Volutpat cursus et lorem ut risus in metus venenatis duis. At vitae
            nullam at at ut. Mattis nisl amet tempus turpis donec vel viverra
            eu. Faucibus convallis faucibus faucibus leo pretium enim euismod.
            Elit amet volutpat pellentesque tempus dolor faucibus risus at.
            Venenatis volutpat nam velit metus cursus ut eget tempor risus.
            Tortor massa magna amet netus adipiscing ultrices nunc facilisi
            eleifend. Tincidunt sit volutpat quam eu at rhoncus purus diam. Et
            condimentum donec ut sed risus mattis metus nisl. Libero praesent
            bibendum mauris mauris turpis.
          </p>
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
