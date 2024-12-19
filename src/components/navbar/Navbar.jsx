import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white text-black p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Side - Site Name */}
                <div className="text-xl font-bold">
                    Job-Portal
                </div>

                {/* Center - Navigation Links */}
                <div className="flex space-x-6">
                    <Link to={"/"}  className="hover:text-gray-300 transition">Home</Link>
                    <Link to={"/addjob" }  className="hover:text-gray-300 transition">Add Job</Link>
                    <Link to={"/myjob"}  className="hover:text-gray-300 transition">My Job</Link>
                </div>

                {/* Right Side - Login and Register Buttons */}
                <div className="flex space-x-4">
                   <Link to={'\login'}>  <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition">
                        Login
                    </button> </Link>
                    <Link to={'/register'}> <button className="bg-blue-400 px-4 py-2 rounded hover:bg-blue-700 transition">
                        Register
                    </button></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;