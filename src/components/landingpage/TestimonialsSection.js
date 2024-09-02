const TestimonialsSection = () => {
  return (
    <section className="py-16 px-8 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          Learners like you achieve their goals through our courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial Cards */}
          {[...Array(6)].map((_, index) => (
            <TestimonialCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow">
    <p className="mb-4">
      "I have taken several courses and found them to be incredibly useful and
      engaging. I feel more confident in my skills now!"
    </p>
    <h4 className="font-semibold">John Doe</h4>
    <p className="text-sm text-gray-400">Web Developer</p>
  </div>
);

export default TestimonialsSection;
