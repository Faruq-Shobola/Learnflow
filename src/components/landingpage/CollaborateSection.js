const CollaborateSection = () => {
  return (
    <section className="py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Image */}
        <img
          src="path/to/image.png"
          alt="Collaborate"
          className="w-full rounded-lg shadow-md"
        />
        {/* Text Block */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Collaborate & learn with our platform
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We offer a wide range of language courses taught by experienced and
            qualified instructors who are passionate about teaching and
            dedicated to helping you achieve your language goals.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-full">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
