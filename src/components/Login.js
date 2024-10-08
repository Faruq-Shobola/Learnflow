import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import smallTeamDiscussionIdeas from "../assets/small-team-discussing-ideas.png";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState(""); // State variable for email input
  const [password, setPassword] = useState(""); // State variable for password input
  const [loading, setLoading] = useState(false); // State variable for loading state
  const navigate = useNavigate(); // Hook for navigating to different routes

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password); // Sign in with email and password using Firebase auth
      // Redirect to Dashboard after login
      navigate("/dashboard");
    } catch (error) {
      alert(`Error logging in: ${error.message}`);
    }
    setLoading(false);
  };

  return (
    <section className="relative flex flex-wrap items-center max-auto">
      <div className="w-full p-8 sm:px-8 lg:w-1/2 flex flex-col gap-8 border rounded-lg border-gray-200">
        <div className="">
          <p className="text-lg">Welcome!</p>

          <h1 className="mt-6 text-2xl font-bold sm:text-3xl">Sign in to</h1>
          <p className="mt-2 text-gray-500">Lorem ipsum is simply</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label for="email" className="capitalize">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded- border-2 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)} // Update email state on input change
              />
            </div>
          </div>

          <div>
            <label for="password" className="capitalize">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded- border-2 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)} // Update password state on input change
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex justify-between">
            <div class="col-span-6">
              <label for="MarketingAccept" class="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  class="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                />

                <span class="text-sm text-gray-700">Remember me</span>
              </label>
            </div>
            <p className="text-center text-sm text-gray-500 capitalize">
              <Link className="underline" to="/forgot-password">
                Forget password?
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className={`block w-full rounded-md  px-5 py-3 text-sm font-medium text-white ${
              loading ? `bg-gray-300` : `bg-black`
            }`}
            disabled={loading}
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-900">
            Don't have an account?
            <Link className="font-semibold ml-2" to="/register">
              Register
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

export default Login;
