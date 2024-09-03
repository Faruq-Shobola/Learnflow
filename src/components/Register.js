import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import smallTeamDiscussionIdeas from "../assets/small-team-discussing-ideas.png";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  // State variables
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // Function to handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Add user data to Firestore
      const userDoc = collection(db, "users");
      await setDoc(doc(userDoc, userCredential.user.uid), {
        username,
        email,
      });

      // Redirect to Login after registration
      navigate("/login");
    } catch (error) {
      alert(`Error registering: ${error.message}`);
    }
  };

  return (
    <section className="relative flex flex-wrap items-center max-auto">
      <div className="w-full p-8 sm:px-8 lg:w-1/2 flex flex-col gap-8 border rounded-lg border-gray-200">
        <div className="">
          <p className="text-lg">Welcome!</p>

          <h1 className="mt-6 text-2xl font-bold sm:text-3xl">Sign up to</h1>
          <p className="mt-2 text-gray-500">Lorem ipsum is simply</p>
        </div>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="email" className="capitalize">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded- border-2 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="capitalize">
              Username
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded- border-2 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="capitalize">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded- border-2 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="capitalize">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded- border-2 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-md bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-900">
            Already have an account?
            <Link className="font-semibold ml-2" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:flex items-center relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          src={smallTeamDiscussionIdeas}
          alt="Small team discussion ideas"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default Register;
