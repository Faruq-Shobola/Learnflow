const FeaturesSection = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          Special features that make our online courses the best
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Made by Experts"
            description="Our programming language courses are meticulously crafted and taught by industry experts with years of practical experience."
          />
          <FeatureCard
            title="Career Opportunities"
            description="Benefit from our job placement assistance services that connect qualified learners with relevant career paths."
          />
          <FeatureCard
            title="Collaboration"
            description="Study at your own pace and on your own schedule, which is ideal for those who have work, family, or other commitments."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default FeaturesSection;
