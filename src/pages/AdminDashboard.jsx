import { useState, useEffect } from 'react';
import { getAllJobs, deleteJob, updateJob } from '../services/api';
import { Trash2, Edit, Save, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editingJob, setEditingJob] = useState(null);
  const [updatedJob, setUpdatedJob] = useState({});

  const fetchJobs = async () => {
    try {
      const data = await getAllJobs(page);
      setJobs(data.jobs);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [page]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await deleteJob(id);
        fetchJobs();
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job._id);
    setUpdatedJob(job);
  };

  const handleSave = async () => {
    try {
      await updateJob(editingJob, updatedJob);
      setEditingJob(null);
      fetchJobs();
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Manage Jobs</h1>
        <Link to="/admin/post-job" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Post New Job
        </Link>
      </div>

      {editingJob ? (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Edit Job</h2>
          <input type="text" value={updatedJob.companyName} onChange={(e) => setUpdatedJob({ ...updatedJob, companyName: e.target.value })} placeholder="Company Name" className="w-full p-2 mb-2 border rounded" />
          <input type="text" value={updatedJob.role} onChange={(e) => setUpdatedJob({ ...updatedJob, role: e.target.value })} placeholder="Role" className="w-full p-2 mb-2 border rounded" />
          <input type="text" value={updatedJob.salary} onChange={(e) => setUpdatedJob({ ...updatedJob, salary: e.target.value })} placeholder="Salary" className="w-full p-2 mb-2 border rounded" />
          <textarea value={updatedJob.eligibility} onChange={(e) => setUpdatedJob({ ...updatedJob, eligibility: e.target.value })} placeholder="Eligibility Criteria" className="w-full p-2 mb-2 border rounded"></textarea>
          <input type="text" value={updatedJob.location} onChange={(e) => setUpdatedJob({ ...updatedJob, location: e.target.value })} placeholder="Location" className="w-full p-2 mb-2 border rounded" />
          <input type="date" value={updatedJob.deadline} onChange={(e) => setUpdatedJob({ ...updatedJob, deadline: e.target.value })} className="w-full p-2 mb-2 border rounded" />
          <input type="date" value={updatedJob.postedOn} onChange={(e) => setUpdatedJob({ ...updatedJob, postedOn: e.target.value })} className="w-full p-2 mb-2 border rounded" />
          <textarea value={updatedJob.description} onChange={(e) => setUpdatedJob({ ...updatedJob, description: e.target.value })} placeholder="Job Description" className="w-full p-2 mb-2 border rounded"></textarea>
          <div className="flex space-x-2">
            <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
            <button onClick={() => setEditingJob(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Salary</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Eligibility</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deadline</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Posted On</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {jobs.map((job) => (
                <tr key={job._id}>
                  <td className="px-6 py-4">{job.companyName}</td>
                  <td className="px-6 py-4">{job.role}</td>
                  <td className="px-6 py-4">{job.salary}</td>
                  <td className="px-6 py-4">{job.eligibility}</td>
                  <td className="px-6 py-4">{job.location}</td>
                  <td className="px-6 py-4">{new Date(job.deadline).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{new Date(job.postedOn).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{job.description}</td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button onClick={() => handleEdit(job)} className="text-blue-500 hover:text-blue-700"><Edit size={20} /></button>
                    <button onClick={() => handleDelete(job._id)} className="text-red-500 hover:text-red-700"><Trash2 size={20} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;