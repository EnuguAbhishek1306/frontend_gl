import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCertification } from '../services/api';
import { useTrackedClick } from '../utils/analytics';

const FreeCertificationDetails = () => {
  const { id } = useParams();
  const [certification, setCertification] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertification = async () => {
      try {
        const data = await getCertification(id);
        setCertification(data);
      } catch (error) {
        console.error('Error fetching certification:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertification();
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!certification) {
    return <div className="text-center py-8">Certification not found</div>;
  }

  return (
    <div className="max-w-3xl mt-2 mx-auto bg-white rounded-lg shadow p-8">
      <div className="flex flex-col items-center mb-6">  
        <h1 className="text-3xl font-bold text-gray-800">{certification.title}</h1>
      </div>
      
      <div className="flex flex-col items-center mb-6">
        <img src={certification.img} alt="Course Cover" className="h-64 w-full object-cover rounded-lg mb-4" />
      </div>

      <table className="w-full border-collapse border border-gray-300 mb-8">
        <tbody>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 p-3 font-semibold">Platform</td>
            <td className="border border-gray-300 p-3">{certification.platform}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-semibold">Created At</td>
            <td className="border border-gray-300 p-3">
              {new Date(certification.createdAt).toLocaleDateString('en-GB')}
            </td>
          </tr>
        </tbody>
      </table>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Learning Outcomes</h3>
        <p className="text-gray-600 whitespace-pre-line">{certification.outcomes}</p>
      </div>

      <div className="flex justify-center mt-6">
        <a
          href={certification.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackApplyClick(certification.link)}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Start Learning
        </a>
      </div>
    </div>
  );
};

export default FreeCertificationDetails;