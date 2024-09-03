// Importing necessary icons from react-icons library
import { FaUserLarge } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { TbBriefcaseFilled } from "react-icons/tb";


// Component for rendering the FeaturesSection
const FeaturesSection = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-12">
          Special features that make our <br /> online courses the best
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Made by Experts"
            description="Our programming language courses are meticulously crafted and taught by industry experts with years of practical experience."
            icon={<FaUserLarge />}
          />
          <FeatureCard
            title="Career Opportunities"
            description="Benefit from our job placement assistance services that connect qualified learners with relevant career paths."
            icon={<TbBriefcaseFilled />}
          />
          <FeatureCard
            title="Collaboration"
            description="Study at your own pace and on your own schedule, which is ideal for those who have work, family, or other commitments."
            icon={<RiGraduationCapFill />}
          />
        </div>
      </div>
    </section>
  );
};

// Component for rendering a feature card
const FeatureCard = ({ title, description, icon }) => (
  <div className="flex flex-col justify-between bg-gray-100 p-7 rounded-lg shadow">
    <div className="text-left">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
    <div className="flex justify-end items-end pt-5">
      <span className="text-4xl font-semibold text-gray-300">{icon}</span>
    </div>
  </div>
);

export default FeaturesSection;
