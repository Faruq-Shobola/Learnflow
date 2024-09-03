import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom
import Ecllipse1 from "../../assets/landingpage/ellipse1.png"; // Importing an image file
import Ecllipse2 from "../../assets/landingpage/ellipse6.png"; // Importing an image file
import Ecllipse3 from "../../assets/landingpage/ellipse5.png"; // Importing an image file
import Hero from "../../assets/landingpage/Hero.png"; // Importing an image file
import Path from "../../assets/landingpage/path.png"; // Importing an image file
import Path2 from "../../assets/landingpage/path2.png"; // Importing an image file

// Defining a functional component called HeroSection
const HeroSection = () => {
  return (
    <section className="bg-primaryblack text-white pt-16 px-8 relative">
      {/* Displaying an image */}
      <img
        src={Path}
        alt="Image 1"
        className="absolute top-16 left-0 w-auto h-[400px] z-10"
      />
      {/* Displaying an image */}
      <img
        src={Path2}
        alt="Image 3"
        className="absolute bottom-16 right-0 w-auto h-[400px] z-10"
      />
      <div className="max-w-6xl md:max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Displaying a heading */}
        <h1 className="text-5xl md:text-[68px] font-bold mb-6 leading-none z-50">
          The free, fun, and effective way to learn a language
        </h1>
        {/* Displaying a paragraph */}
        <p className="text-lg mb-4 z-50">
          Learn at your own pace with lifetime access on mobile and desktop.
        </p>
        {/* Displaying a link */}
        <Link
          to="/login"
          className="bg-primaryyellow hover:bg-yellow-600 text-black py-3 px-6 rounded-2xl mb-8 z-50"
        >
          Start a new course!
        </Link>
        <div className="flex items-center flex-nowrap mb-3 z-50">
          {/* Displaying an image */}
          <img
            src={Ecllipse1}
            alt="Image 1"
            className="rounded-full w-10 h-10 -ml-3"
          />
          {/* Displaying an image */}
          <img
            src={Ecllipse2}
            alt="Image 2"
            className="rounded-full w-10 h-10 -ml-3"
          />
          {/* Displaying an image */}
          <img
            src={Ecllipse3}
            alt="Image 3"
            className="rounded-full w-10 h-10 -ml-3"
          />
        </div>
        {/* Displaying a paragraph */}
        <p className="text-lg z-50">
          Join thousands of students to start coding now!
        </p>

        {/* Displaying an image */}
        <img
          src={Hero}
          alt="Dashboard Mockup"
          className="w-full max-w-4xl mt-10 z-50"
        />
      </div>
    </section>
  );
};

export default HeroSection; // Exporting the HeroSection component as the default export
