import React from 'react';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    const { 
        title, 
        _id,
        company, 
        company_logo, 
        requirements, 
        description, 
        salaryRange, 
        location, 
        jobType, 
        timeAgo 
    } = job;

    return (
        <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md p-6 mt-12">
            <div className="flex items-center mb-4">
                <img 
                    src={company_logo} 
                    alt={`${company} logo`} 
                    className="w-12 h-12 rounded-full"
                />
                <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">{company}</h3>
                    <p className="text-sm text-gray-500">{location}</p>
                </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}  
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="mr-4">{jobType}</span>
                <span>{timeAgo}</span>
            </div>

            <p className="text-sm text-gray-600 mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
                {requirements.map((req, index) => (
                    <span 
                        key={index} 
                        className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                    >
                        {req}
                    </span>
                ))}
            </div>

            <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-blue-600">
                   Salary ${salaryRange.min}/{salaryRange.currency}/Hour
                </p>
                <Link to={`/jobs/${_id}`}> 
                <button 
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                    Apply Now
                </button>
                 </Link>
            </div>
        </div>
    );
};

export default HotJobCard;
