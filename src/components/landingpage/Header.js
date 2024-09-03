import { useState } from "react"; // Import useState hook
import { Link } from "react-router-dom";
import logo from "../../assets/landingpage/Logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-primaryblack text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="text-white hover:text-primaryyellow">
            <img src={logo} alt="logo" className="w-auto h-9" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link to="#about" className="hover:text-primaryyellow text-base">
            About
          </Link>
          <Link to="#features" className="hover:text-primaryyellow text-base">
            Features
          </Link>
          <Link to="#pricing" className="hover:text-primaryyellow text-base">
            Pricing
          </Link>
        </nav>

        {/* Call to Action Button for Desktop */}
        <Link
          to="/login"
          className="hidden md:flex bg-transparent border border-primaryyellow hover:bg-primaryyellow text-base text-primaryyellow hover:text-black py-3 px-5 rounded-full"
        >
          Let’s start your learning journey
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu} // Toggle mobile menu on click
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-primaryblack text-white py-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="#about"
              className="hover:text-primaryyellow text-sm"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              About
            </Link>
            <Link
              to="#features"
              className="hover:text-primaryyellow text-sm"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Features
            </Link>
            <Link
              to="#pricing"
              className="hover:text-primaryyellow text-sm"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Pricing
            </Link>
            <Link
              to="/login"
              className="bg-transparent border border-primaryyellow hover:bg-primaryyellow text-sm text-primaryyellow hover:text-black py-3 px-5 rounded-full"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Let’s start your learning journey
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
