const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-white hover:text-yellow-500">
            LearnFlow
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-yellow-500">
            About
          </a>
          <a href="#features" className="hover:text-yellow-500">
            Features
          </a>
          <a href="#pricing" className="hover:text-yellow-500">
            Pricing
          </a>
        </nav>

        {/* Call to Action Button */}
        <a
          href="#start-learning"
          className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-6 rounded-full"
        >
          Let’s start your learning journey
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
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
    </header>
  );
};

export default Header;
