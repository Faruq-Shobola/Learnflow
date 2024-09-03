import { Link } from "react-router-dom";
import Frame1 from "../../assets/landingpage/Frame1.png";
import Frame2 from "../../assets/landingpage/Frame2.png";

const CollaborateSection = () => {
  return (
    <section className="py-12 md:py-16 px-8 flex flex-col gap-12 md:gap-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12">
        {/* Image */}
        <img
          src={Frame2}
          alt="Collaborate"
          className="w-full rounded-lg h-auto md:h-[400px] object-contain"
        />
        {/* Text Block */}
        <div className="flex flex-col gap-4 lg:mr-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Collaborate & learn with our platform
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We offer a wide range of language courses taught by experienced and
            qualified instructors who are passionate about teaching and
            dedicated to helping you achieve your language goals.
          </p>
          <Link
            to="#"
            className="bg-primaryyellow hover:bg-yellow-600 text-black self-start py-3 px-6 rounded-2xl"
          >
            Get started
          </Link>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12">
        {/* Image */}
        <img
          src={Frame1}
          alt="Collaborate"
          className="w-full rounded-lg h-auto md:h-[400px] object-contain md:order-last"
        />
        {/* Text Block */}
        <div className="flex flex-col gap-4 lg:ml-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Propel your career & expand your knowledge at any level
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Learnflow is an online course class that provides various categories
            of programming courses.
          </p>
          <Link
            to="#"
            className="bg-primaryyellow hover:bg-yellow-600 text-black self-start py-3 px-6 rounded-2xl"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
