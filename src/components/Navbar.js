import { useAuth } from "../AuthContext";

const Navbar = () => {
  const { userData } = useAuth();

  return (
    <div className="flex justify-end items-center p-4 bg-white shadow">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-gray-700 font-bold">{userData?.username}</span>
          <span className="text-gray-400 text-sm">Learner</span>
        </div>
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
