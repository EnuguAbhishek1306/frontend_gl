import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createInternship } from '../../services/api';

const PostInternship = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    jobRole: '',
    employmentType: '',
    duration: '',
    stipend: '',
    location: '',
    workMode: '',
    lastDateToApply: '',
    description: '',
    link: '',
    img: ''
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
      await createInternship(formData);
      navigate('/admin');
    } catch (error) {
      setError(error.response?.data?.message || 'Error creating internship');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Post New Internship</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Job Role</label>
          <input type="text" name="jobRole" value={formData.jobRole} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Employment Type</label>
          <input type="text" name="employmentType" value={formData.employmentType} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Duration</label>
          <input type="text" name="duration" value={formData.duration} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Stipend</label>
          <input type="text" name="stipend" value={formData.stipend} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Work Mode</label>
          <input type="text" name="workMode" value={formData.workMode} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Last Date to Apply</label>
          <input type="date" name="lastDateToApply" value={formData.lastDateToApply} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded" rows="4" required />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Application Link</label>
          <input type="url" name="link" value={formData.link} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Image URL</label>
          <input type="url" name="img" value={formData.img} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Post Internship
        </button>
      </form>
    </div>
  );
};

export default PostInternship;