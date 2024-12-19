import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../../auth/AuthContext";
import Swal from "sweetalert2"; // Import SweetAlert2

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((result) => {
        console.log("sign in ", result.user);
        setShowSuccessAlert(true);
        Swal.fire({
          title: "Success!",
          text: "You have logged in successfully.",
          icon: "success",
          showConfirmButton: false,
          timer: 3000, // Close alert after 3 seconds
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log("Google login triggered");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {showSuccessAlert && (
          <div className="mb-4">
            {/* SweetAlert2 using Swal.fire */}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Address */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mb-4"
          >
            Login
          </button>
        </form>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100 transition mb-4"
        >
          <FcGoogle className="mr-2" size={20} />
          Continue with Google
        </button>

        {/* Register Redirect */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
