import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";
import jobIcon from "../../assets/icon.png";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-white text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Site Name */}
        <div className="text-xl font-bold">
          <Link to={"/"}>
            <img
              className="rounded-full w-12 h-12"
              src={jobIcon}
              alt="Site Icon"
            />
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex space-x-6">
          <Link to={"/"} className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link to={"/addjob"} className="hover:text-gray-300 transition">
            Add Job
          </Link>
          <Link to={"/myApplication"} className="hover:text-gray-300 transition">
            My Application
          </Link>
          <Link to={"/myPstedJobs"} className="hover:text-gray-300 transition">
             My Posted Jobs
          </Link>
        </div>

        {/* Right Side - User Actions */}
        <div className="flex space-x-4 items-center">
          {user ? (
            <>
              {/* Avatar Icon */}
              <Link to={"/profile"}>
                <img
                  src={user.photoURL || "https://via.placeholder.com/150"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
                />
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="bg-blue-400 px-4 py-2 rounded hover:bg-blue-700 transition">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
