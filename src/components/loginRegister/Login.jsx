import React, { useContext, useState } from "react";
import AuthContext from "../../auth/AuthContext";
import Swal from "sweetalert2"; // Import SweetAlert2
import SocialLogin from "./SocialLogin";

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
        <div className='divider'> OR </div>
        <SocialLogin></SocialLogin>

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
