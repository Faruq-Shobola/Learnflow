import { useAuth } from "../AuthContext";

// Importing the useAuth hook from the AuthContext file

// Defining the Navbar component
const Navbar = () => {
  // Using the useAuth hook to get the userData
  const { userData } = useAuth();

  // Rendering the Navbar component
  return (
    <div className="flex justify-end items-center p-4 bg-white shadow">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          {/* Displaying the username from the userData */}
          <span className="text-gray-700 font-bold">{userData?.username}</span>
          {/* Displaying the user role */}
          <span className="text-gray-400 text-sm">Learner</span>
        </div>
        {/* Displaying the user avatar */}
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="rounded-full h-10 w-10"
        />
      </div>
    </div>
  );
};

// Exporting the Navbar component as the default export
export default Navbar;
