import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getInternship } from '../../services/api';
import { useTrackedClick } from '../../utils/analytics';

const InternshipDetails = () => {
  const { id } = useParams();
  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInternship = async () => {
      try {
        const data = await getInternship(id);
        setInternship(data);
      } catch (error) {
        console.error('Error fetching internship:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInternship();
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!internship) {
    return <div className="text-center py-8">Internship not found</div>;
  }

  return (
    <div className="max-w-3xl mt-2 mx-auto bg-white rounded-lg shadow p-8">
      <div className="flex flex-col items-center mb-6">  
        <h1 className="text-3xl font-bold text-gray-800">{internship.title}</h1>
      </div>
      
      <div className="flex flex-col items-center mb-6">
        <img src={internship.img} alt="Company Logo" className="h-64 w-full object-cover rounded-lg mb-4" />
      </div>

      <table className="w-full border-collapse border border-gray-300 mb-8">
        <tbody>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 p-3 font-semibold">Job Role</td>
            <td className="border border-gray-300 p-3">{internship.jobRole}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-semibold">Employment Type</td>
            <td className="border border-gray-300 p-3">{internship.employmentType}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 p-3 font-semibold">Duration</td>
            <td className="border border-gray-300 p-3">{internship.duration}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-semibold">Stipend</td>
            <td className="border border-gray-300 p-3">{internship.stipend}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 p-3 font-semibold">Location</td>
            <td className="border border-gray-300 p-3">{internship.location}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-semibold">Work Mode</td>
            <td className="border border-gray-300 p-3">{internship.workMode}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 p-3 font-semibold">Last Date to Apply</td>
            <td className="border border-gray-300 p-3">{new Date(internship.lastDateToApply).toLocaleDateString('en-GB')}</td>
          </tr>
        </tbody>
      </table>
      
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Description</h3>
        <p className="text-gray-600 whitespace-pre-line">{internship.description}</p>
      </div>

      <div className="flex justify-center mt-6">
        <a
          href={internship.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackApplyClick(internship.link)}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default InternshipDetails;