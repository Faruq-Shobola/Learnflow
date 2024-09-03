import { Link } from "react-router-dom";
import logo from "../../assets/landingpage/Logo.png";
import {

FaTwitter,
FaLinkedin,
FaFacebook,
FaGithub,
FaGlobe,
} from "react-icons/fa"; // Import social icons from react-icons

const Footer = () => {
return (
  <footer className="bg-primaryblack text-white py-12">
    {/* Main Footer Content */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* First Column - Brand and Description */}
        <div className="mb-8 md:mb-0">
          <img src={logo} alt="logo" className="w-auto h-9" />
          <p className="text-xl mt-4 text-gray-400">
            Top learning experiences that create more talent in the world.
          </p>
        </div>

        {/* Second Column - Menu Lists */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400">
          &copy; 2024 The Programmers University. All rights reserved.
        </p>
        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={20} />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white">
            <FaLinkedin size={20} />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white">
            <FaFacebook size={20} />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white">
            <FaGithub size={20} />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white">
            <FaGlobe size={20} />
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
};

export default Footer;
