import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../components/hooks/UseAuth";

const AddJobs = () => {

    const {user} = useAuth(); 
  const navigate = useNavigate();

  const handleJobSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Gather all form data
    const newJob = {
      title: form.title.value,
      location: form.location.value,
      jobType: form.jobType.value,
      category: form.category.value,
      applicationDeadline: form.applicationDeadline.value,
      salaryRange: {
        min: parseFloat(form["salaryRange.min"].value),
        max: parseFloat(form["salaryRange.max"].value),
        currency: form["salaryRange.currency"].value,
      },
      description: form.description.value,
      company: form.company.value,
      requirements: form.requirements.value.split(",").map((req) => req.trim()),
      responsibilities: form.responsibilities.value
        .split(",")
        .map((res) => res.trim()),
      hr_email: form.hr_email.value,
      hr_name: form.hr_name.value,
      company_logo: form.company_logo.value || null, // Optional field
    };

    // Make API call
    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to submit job");
        }
        return res.json();
      })
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Job Submitted!",
          text: "The job was added successfully.",
        });
        console.log("Job Data Submitted:", data);
        form.reset(); // Reset form after successful submission
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: error.message || "Something went wrong. Please try again.",
        });
      });
    //  navigate page
    navigate("/myPstedJobs");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Job</h2>
        <form onSubmit={handleJobSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Job Title</label>
            <input
              type="text"
              name="title"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Job Type</label>
            <select
              name="jobType"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            >
              <option value="">Select Job Type</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Application Deadline</label>
            <input
              type="date"
              name="applicationDeadline"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700">Salary Range (Min)</label>
              <input
                type="number"
                name="salaryRange.min"
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Salary Range (Max)</label>
              <input
                type="number"
                name="salaryRange.max"
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Currency</label>
              <select
                name="salaryRange.currency"
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                required
              >
                <option value="bdt">BDT</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Job Description</label>
            <textarea
              name="description"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Company Name</label>
            <input
              type="text"
              name="company"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">
              Requirements (comma-separated)
            </label>
            <input
              type="text"
              name="requirements"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">
              Responsibilities (comma-separated)
            </label>
            <input
              type="text"
              name="responsibilities"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">HR Email</label>
            <input
              type="email"
              name="hr_email"
              defaultValue={user?.email}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">HR Name</label>
            <input
              type="text"
              name="hr_name"
              defaultValue={user?.name}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Company Logo URL</label>
            <input
              type="url"
              name="company_logo"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
