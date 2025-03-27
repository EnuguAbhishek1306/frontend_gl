import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addAdmin } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const AddAdmin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { admin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!admin?.isSuper) {
      setError('Only super admin can add new admins');
      return;
    }

    try {
      await addAdmin({ email, password });
      navigate('/admin/dashboard');
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to add admin');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Admin</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Admin
        </button>
      </form>
    </div>
  );
};

export default AddAdmin;