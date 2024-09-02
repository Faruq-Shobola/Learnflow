// src/components/NotFound.js
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Oops! Page not found.</p>
      <Link
        to="/"
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
