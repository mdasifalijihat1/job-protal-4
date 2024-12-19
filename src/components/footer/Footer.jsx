import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" text-black py-6 shadow-md">
            <div className="container mx-auto text-center">
                {/* Social Media Icons and Names */}
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-500">
                        <FaFacebook size={24} />
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-400">
                        <FaTwitter size={24} />
                        <span>Twitter</span>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-300">
                        <FaLinkedin size={24} />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-pink-500">
                        <FaInstagram size={24} />
                        <span>Instagram</span>
                    </a>
                </div>

                {/* Copyright Text */}
                <p className="text-black text-sm">
                    &copy; {new Date().getFullYear()} Job-Portal. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
