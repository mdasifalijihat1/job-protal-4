import React from "react";
import { motion } from "framer-motion";
import team2 from "../../assets/team/group (1).jpg";
import team1 from "../../assets/team/group (2).jpg";

const Banner = () => {
  return (
    <div className="bg-blue-50 py-16 px-6 relative">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="pr-8">
          <motion.h1
            animate={{ x: [0, 60], color: ["#000", "#00f"] }}
            transition={{
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-4xl font-bold text-gray-900"
          >
            The Easiest Way
          </motion.h1>

          <motion.h2
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            New{" "}
            <motion.span
              animate={{ color: ["#ecff33", "#33ffe3", "#ff6133"] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              className="font-bold"
            >
              Job
            </motion.span>{" "}
            For You
          </motion.h2>

          <p className="mt-6 text-gray-600">
            Each month, more than 3 million job seekers turn to websites in
            their search for work, making over 140,000 applications every
            single day.
          </p>

          {/* Search Form */}
          <div className="mt-8 flex gap-4">
            <select className="flex-1 min-w-[120px] border border-gray-300 rounded-lg px-4 py-3">
              <option>Industry</option>
            </select>
            <select className="flex-1 min-w-[120px] border border-gray-300 rounded-lg px-4 py-3">
              <option>Location</option>
            </select>
            <input
              type="text"
              placeholder="Your keyword..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 whitespace-nowrap">
              Search
            </button>
          </div>

          {/* Popular Searches */}
          <p className="mt-4 text-gray-600">
            Popular Searches:{" "}
            <span className="text-blue-600">
              Designer, Web, IOS, Developer, PHP, Senior, Engineer
            </span>
          </p>
        </div>

        {/* Right Section */}
        <div className="pl-8 relative">
          {/* Top Image */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute top-0 left-16"
          >
            <img
              src={team2}
              alt="Team collaboration"
              className="rounded-tl-3xl rounded-br-3xl border-4 border-blue-500 shadow-lg w-60"
            />
          </motion.div>

          {/* Bottom Image */}
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute bottom-0 right-0"
          >
            <img
              src={team1}
              alt="Professional meeting"
              className="rounded-tl-3xl rounded-br-3xl border-4 border-blue-500 shadow-lg w-60"
            />
          </motion.div>

          {/* Decorative Dots */}
          <div className="absolute top-0 right-0 transform translate-x-16 -translate-y-8">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-200"
            >
              {[...Array(10)].map((_, i) =>
                [...Array(10)].map((_, j) => (
                  <circle
                    key={`${i}-${j}`}
                    cx={i * 10}
                    cy={j * 10}
                    r="2"
                    fill="currentColor"
                  />
                ))
              )}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
