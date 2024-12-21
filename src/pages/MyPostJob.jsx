import React, { useEffect, useState } from "react";
import useAuth from "../components/hooks/UseAuth";
import { Link } from "react-router-dom";

const MyPostJob = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user && user.email) {
      fetch(`http://localhost:3000/jobs?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setJobs(data))
        .catch((err) => console.error("Failed to fetch jobs:", err));
    }
  }, [user?.email]);

  const handleDelete = (jobId) => {
    fetch(`http://localhost:3000/jobs/${jobId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        // Update the state to remove the deleted job
        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
      })
      .catch((err) => console.error("Failed to delete job:", err));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        My Posted Jobs: {jobs.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-lg rounded-lg p-4 border"
            >
              {job.company_logo && (
                <img
                  src={job.company_logo}
                  alt="Company Logo"
                  className="h-20 w-20 object-cover mx-auto mb-4"
                />
              )}
              <h3 className="text-lg font-semibold text-gray-800">
                {job.title}
              </h3>
              <p className="text-gray-600">
                <strong>Location:</strong> {job.location}
              </p>
              <p className="text-gray-600">
                <strong>Application Deadline:</strong>{" "}
                {new Date(job.applicationDeadline).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                <strong>Salary Range:</strong> {job.salaryRange.min} -{" "}
                {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
              </p>
              <p className="text-gray-600">
                <strong>HR Name:</strong> {job.hr_name}
              </p>
              <p className="text-gray-600">
                <strong>Category:</strong> {job.category}
              </p>
              <p className="text-gray-600">
                <strong>Job Type:</strong> {job.jobType}
              </p>
              <p className="text-gray-600">
                <strong>Application Count:</strong> {job.applicationCount}
              </p>
              <Link to={`/viewApplications/${job._id}`} >                
                <button
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-red-300"
                >
                  View Applications 
                </button>
              </Link>
              <button
                onClick={() => handleDelete(job.id)}
                className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
              >
                Delete Job
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">You have not posted any jobs yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyPostJob;
