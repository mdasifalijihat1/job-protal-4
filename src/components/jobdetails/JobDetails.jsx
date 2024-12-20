import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  // Destructure job details from loader data
  const { _id, title, company, deadline } = useLoaderData();

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 bg-gray-50 rounded-lg shadow-md mt-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Job Details</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Position:</h2>
        <p className="text-gray-600">{title}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Company:</h2>
        <p className="text-gray-600">{company}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700">
          Application Deadline:
        </h2>
        <p className="text-gray-600">{deadline}</p>
      </div>

      <Link to={`/jobApply/${_id}`}>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Apply Now
      </button>
      </Link>
    </div>
  );
};

export default JobDetails;
