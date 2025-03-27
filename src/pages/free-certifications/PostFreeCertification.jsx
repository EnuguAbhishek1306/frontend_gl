import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCertification } from '../../services/api';

const PostFreeCertification = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    platform: '',
    outcomes: '',
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
      await createCertification(formData);
      navigate('/admin');
    } catch (error) {
      setError(error.response?.data?.message || 'Error creating certification');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Post New Certification Course</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Course Title</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded" 
            required 
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Platform</label>
          <input 
            type="text" 
            name="platform" 
            value={formData.platform} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded" 
            required 
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Learning Outcomes</label>
          <textarea 
            name="outcomes" 
            value={formData.outcomes} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded" 
            rows="4" 
            required 
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Course Link</label>
          <input 
            type="url" 
            name="link" 
            value={formData.link} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded" 
            required 
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Course Image URL</label>
          <input 
            type="url" 
            name="img" 
            value={formData.img} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded" 
            required 
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Post Certification
        </button>
      </form>
    </div>
  );
};

export default PostFreeCertification;