import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const [applications, setApplications] = useState(useLoaderData()); // Load applications data

  // Handle status change and update in backend
  const handleStatusChange = (id, newStatus) => {
    console.log(`Changing status for ${id} to ${newStatus}`);
    fetch(`http://localhost:3000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Status updated successfully:", data);
        Swal.fire({
          icon: "success",
          title: "Status Updated",
          text: `Status for application ID ${id} updated to "${newStatus}".`,
          timer: 2000,
        });

        // Auto-refresh: Update the state to reflect changes
        setApplications((prev) =>
          prev.map((app) =>
            app._id === id ? { ...app, status: newStatus } : app
          )
        );
      })
      .catch((error) => {
        console.error("Error updating status:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to update status. Please try again.",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Applications for this Job: {applications.length}
      </h2>
      {applications.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((application) => (
            <div
              key={application._id} // Ensure `key` is unique
              className="bg-white shadow-lg rounded-lg p-4 border"
            >
              <p className="text-gray-600">
                <strong>Email:</strong> {application.applicant_email}
              </p>
              <p className="text-gray-600">
                <strong>LinkedIn:</strong>{" "}
                <a
                  href={application.linkedin}
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {application.linkedin || "N/A"}
                </a>
              </p>
              <p className="text-gray-600">
                <strong>GitHub:</strong>{" "}
                <a
                  href={application.github}
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {application.github || "N/A"}
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Resume:</strong>{" "}
                <a
                  href={application.resume}
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </p>

              <div className="mt-4">
                <label className="block text-gray-600 font-semibold">
                  Change Status
                </label>
                <select
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  value={application.status || ""} // Default status
                  onChange={(e) => handleStatusChange(application._id, e.target.value)}
                >
                  <option value="Under Review">Under Review</option>
                  <option value="Set Interview">Set Interview</option>
                  <option value="Hired">Hired</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No applications for this job yet.</p>
      )}
    </div>
  );
};

export default ViewApplications;
