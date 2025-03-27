import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getJob } from '../../../services/api';
const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJob(id);
        setJob(data);
      } catch (error) {
        console.error('Error fetching job:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!job) {
    return <div className="text-center py-8">Job not found</div>;
  }

  return (
    <>
    <div></div>
    <div className="max-w-3xl mt-2 mx-auto bg-white rounded-lg shadow p-8">
      <div className="flex flex-col items-center mb-6">  
      <h1 className="text-3xl font-bold text-gray-800">{job.companyName} is Hiring✔</h1>
      </div>
      <div className="flex flex-col items-center mb-6">
        <img src={job.img} alt="Company Logo" className="h-64 w-full object-cover rounded-lg mb-4" />
      </div>

      <table className="w-full border-collapse border border-gray-300 mb-8">
        <tbody>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 p-3 font-semibold">Job ID</td>
            <td className="border border-gray-300 p-3">{job._id}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-semibold">Role</td>
            <td className="border border-gray-300 p-3">{job.role}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 p-3 font-semibold">Salary</td>
            <td className="border border-gray-300 p-3">{job.salary}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-semibold">Eligibility Criteria</td>
            <td className="border border-gray-300 p-3">{job.eligibilityCriteria}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 p-3 font-semibold">Location</td>
            <td className="border border-gray-300 p-3">{job.location}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-semibold">Application Deadline</td>
            <td className="border border-gray-300 p-3">{new Date(job.deadline).toLocaleDateString('en-GB')}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 p-3 font-semibold">Posted On</td>
            <td className="border border-gray-300 p-3">{new Date(job.createdAt).toLocaleDateString('en-GB')}</td>
          </tr>
        </tbody>
      </table>
      
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h3>
        <p className="text-gray-600 whitespace-pre-line">{job.companyDescription}</p>
      </div>

      <div className="flex justify-center mt-6">
        <a
          href={job.companyLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackApplyClick(job.companyLink)}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Apply Now
        </a>
      </div>
    </div>
    </>
  );
};

export default JobDetails;