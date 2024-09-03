// Importing the image from the specified path
import image from "../../assets/landingpage/Dashboard 2.png";

// Defining the CTASection component
const CTASection = () => {
  return (
    <section className="py-16 px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row  gap-5 bg-primaryyellow p-8 md:py-10 md:px-16 rounded-3xl relative">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Expand your skills & knowledge at any level.
          </h2>
          <p className="text-lg mb-8">
            Learn at your own pace with lifetime access on mobile and desktop.
          </p>
          <button className="bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full">
            Get started
          </button>
        </div>
        <img
          src={image}
          alt="cta-image"
          className="hidden md:flex absolute bottom-0 right-0 w-auto h-[300px] object-fit"
        />
      </div>
    </section>
  );
};

// Exporting the CTASection component as the default export
export default CTASection;
