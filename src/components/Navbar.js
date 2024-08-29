const Navbar = () => {
  return (
    <div className="flex justify-end items-center p-4 bg-white shadow">
      <div className="flex items-center">
        <span className="text-gray-700 mr-2">Amarachi</span>
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="rounded-full h-10 w-10"
        />
      </div>
    </div>
  );
};

export default Navbar;
