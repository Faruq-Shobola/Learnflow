import Ecllipse1 from "../../assets/landingpage/ellipse1.png";
import Ecllipse2 from "../../assets/landingpage/ellipse6.png";
import Ecllipse3 from "../../assets/landingpage/ellipse5.png";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "Java Developer",
    image: Ecllipse1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Python Developer",
    image: Ecllipse2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 3,
    name: "Alice Johnson",
    title: "Full Stack Developer",
    image: Ecllipse3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 4,
    name: "Alice Johnson",
    title: "Full Stack Developer",
    image: Ecllipse2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-primaryblack text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Subtitle */}
        <div className="text-center mb-12 max-w-6xl md:max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Learners like you achieve their goals through our courses
          </h2>
          <p className="mt-4 text-lg md:text-xl px-10 text-gray-300">
            We believe everyone has something to give. Share your skills &
            experience with students around the world by teaching free or paid.
          </p>
        </div>
        {/* Masonry Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-xl shadow-md border border-gray-200"
            >
              {/* Image */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-700"
                />
                <div className="ml-4">
                  {/* Name */}
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  {/* Title */}
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              {/* Testimonial Text */}
              <p className="text-gray-300">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
