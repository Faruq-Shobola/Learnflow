import { Link } from "react-router-dom";

// Define the NotFound component
const NotFound = () => {
    return (
        // Container div with flex layout and centered content
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
            {/* Heading */}
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            {/* Error message */}
            <p className="text-2xl text-gray-600 mb-8">Oops! Page not found.</p>
            {/* Link to go back home */}
            <Link
                to="/"
                className="bg-primaryyellow hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full"
            >
                Go Back Home
            </Link>
        </div>
    );
};

// Export the NotFound component as the default export
export default NotFound;
