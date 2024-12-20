import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/UseAuth';

const JobApply = () => {

    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    // console.log(id, user)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target; // Access the form element from the event
    const linkedin = form.linkedin.value;
    const github = form.github.value; // Corrected the name to 'github'
    const resume = form.resume.value;
    // console.log('Form Submitted:', linkedin, github, resume);

    const jobApplication = {
        job_id: id,
        applicant_email: user.email,
        linkedin,
        github,
        resume
    }

    // Fixed typo here from 'bosy' to 'body'
    fetch('http://localhost:3000/job-applications', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(jobApplication) // Corrected this
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

    // SweetAlert2 Success Popup
    Swal.fire({
      title: 'Application Submitted!',
      text: 'Your application has been successfully submitted.',
      icon: 'success',
      confirmButtonText: 'Great!',
    });

    navigate('/myApplication')

    // You can add logic to handle the data, e.g., send it to a server
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Application</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* LinkedIn URL */}
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
            LinkedIn URL
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter your LinkedIn profile URL"
            required
          />
        </div>

        {/* GitHub URL */}
        <div>
          <label htmlFor="github" className="block text-sm font-medium text-gray-700">
            GitHub URL
          </label>
          <input
            type="url"
            id="github"
            name="github"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter your GitHub profile URL"
            required
          />
        </div>

        {/* Resume URL */}
        <div>
          <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
            Resume URL
          </label>
          <input
            type="url"
            id="resume"
            name="resume"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter your resume URL"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Apply Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
