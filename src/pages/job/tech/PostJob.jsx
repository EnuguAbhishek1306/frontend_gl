import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createJob } from '../../../services/api';

const PostJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    role: '',
    eligibilityCriteria: '',
    salary: '',
    location: '',
    companyLink: '',
    deadline: '',
    companyDescription: '',
    img: '' // Added image field
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createJob(formData);
      navigate('/admin/');
    } catch (error) {
      setError(error.response?.data?.message || 'Error creating job');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Post New Job</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Company Name</label>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Role</label>
          <input type="text" name="role" value={formData.role} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Eligibility Criteria</label>
          <textarea name="eligibilityCriteria" value={formData.eligibilityCriteria} onChange={handleChange} className="w-full px-3 py-2 border rounded" rows="4" required />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Salary</label>
          <input type="text" name="salary" value={formData.salary} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Company Link</label>
          <input type="url" name="companyLink" value={formData.companyLink} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Application Deadline</label>
          <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Company Description</label>
          <textarea name="companyDescription" value={formData.companyDescription} onChange={handleChange} className="w-full px-3 py-2 border rounded" rows="4" required />
        </div>

        {/* New Image Field */}
        <div>
          <label className="block text-gray-700 mb-2">Company Logo/Image URL</label>
          <input type="url" name="img" value={formData.img} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;