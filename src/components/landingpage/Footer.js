import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-8 bg-black text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Footer Links */}
        <div>
          <h3 className="font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Programs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        {/* Social Links */}
        <div>
          <h3 className="font-bold mb-4">Social</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:underline">
                Twitter
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Facebook
              </Link>
            </li>
          </ul>
        </div>
        {/* Legal Links */}
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:underline">
                Terms
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2024 The Programmers University. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
