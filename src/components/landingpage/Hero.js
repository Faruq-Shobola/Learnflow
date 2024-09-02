const HeroSection = () => {
  return (
    <header className="bg-black text-white py-16 px-8">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-4">
          The free, fun, and effective way to learn a language
        </h1>
        <p className="text-lg mb-8">
          Learn at your own pace with lifetime access on mobile and desktop.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-full mb-8">
          Start a new course!
        </button>
        {/* Mockup Image */}
        <img
          src="path/to/mockup.png"
          alt="Dashboard Mockup"
          className="w-full max-w-4xl mt-10"
        />
      </div>
    </header>
  );
};

export default HeroSection;
