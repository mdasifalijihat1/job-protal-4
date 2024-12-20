import React, { useEffect, useState } from 'react';
import useAuth from '../components/hooks/UseAuth';

const MyApplication = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">My Job Applications</h2>

        {/* If no jobs found */}
        {jobs.length === 0 ? (
          <p className="text-lg text-gray-600">You have not applied to any jobs yet.</p>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition-all">
                <div className="flex items-center space-x-4">
                  {job.company_logo && (
                    <img
                      src={job.company_logo}
                      alt={`${job.company} logo`}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-medium text-gray-800">{job.job_title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                </div>

                <p className="mt-2 text-gray-600">Job Type: {job.jobType}</p>
                <p className="text-gray-600">Category: {job.category}</p>
                <p className="text-gray-600">Location: {job.location}</p>
                <p className="text-gray-600">Application Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}</p>
                <p className="text-gray-600">Status: {job.status || 'Pending'}</p>

                {/* Action buttons (if any) */}
                <div className="mt-2 flex justify-end space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 focus:outline-none">View Details</button>
                  <button className="text-red-600 hover:text-red-800 focus:outline-none">Withdraw</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApplication;
