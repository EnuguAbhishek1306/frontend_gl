import { useState, useEffect } from 'react';
import { 
  getAllJobs, 
  deleteJob, 
  updateJob, 
  getAllInternships, 
  getAllCertifications,
  deleteInternship,
  updateInternship,
  deleteCertification,
  updateCertification 
} from '../services/api';

import { Link } from 'react-router-dom';
import { Pagination } from '../components/Pagination';
import DataTable from '../components/DataTable';

const AdminDashboard = () => {
  // State for active section
  const [activeTab, setActiveTab] = useState("jobs");
  
  // Jobs state
  const [jobs, setJobs] = useState([]);
  const [jobsPage, setJobsPage] = useState(1);
  const [jobsTotalPages, setJobsTotalPages] = useState(1);
  
  // Internships state
  const [internships, setInternships] = useState([]);
  const [internshipsPage, setInternshipsPage] = useState(1);
  const [internshipsTotalPages, setInternshipsTotalPages] = useState(1);
  
  // Certifications state
  const [certifications, setCertifications] = useState([]);
  const [certificationsPage, setCertificationsPage] = useState(1);
  const [certificationsTotalPages, setCertificationsTotalPages] = useState(1);
  
  // Common state
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState(null);
  const [updatedItem, setUpdatedItem] = useState({});

  // Fetch functions
  const fetchJobs = async () => {
    try {
      const data = await getAllJobs(jobsPage);
      setJobs(data.jobs);
      setJobsTotalPages(data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setLoading(false);
    }
  };

  const fetchInternships = async () => {
    try {
      const data = await getAllInternships(internshipsPage);
      setInternships(data.internships);
      setInternshipsTotalPages(data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching internships:', error);
      setLoading(false);
    }
  };

  const fetchCertifications = async () => {
    try {
      const data = await getAllCertifications(certificationsPage);
      setCertifications(data.certifications);
      setCertificationsTotalPages(data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching certifications:', error);
      setLoading(false);
    }
  };

  // Effect hooks for pagination
  useEffect(() => {
    if (activeTab === 'jobs') fetchJobs();
    if (activeTab === 'internships') fetchInternships();
    if (activeTab === 'certifications') fetchCertifications();
  }, [jobsPage, internshipsPage, certificationsPage, activeTab]);

  // Delete handlers
  const handleDelete = async (id, type) => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      try {
        switch (type) {
          case 'job':
            await deleteJob(id);
            fetchJobs();
            break;
          case 'internship':
            await deleteInternship(id);
            fetchInternships();
            break;
          case 'certification':
            await deleteCertification(id);
            fetchCertifications();
            break;
        }
      } catch (error) {
        console.error(`Error deleting ${type}:`, error);
      }
    }
  };



  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-4 mb-8">
        <Link to="/admin/post-job" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Post New Job
        </Link>
        <Link to="/admin/post-internship" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Post Internship
        </Link>
        <Link to="/admin/post-free-certification" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Post Certification
        </Link>
      </div>

      <div className="mb-6">
        <div className="flex border-b border-gray-200">
          <button
            className={`px-4 py-2 ${activeTab === 'jobs' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('jobs')}
          >
            Manage Jobs
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'internships' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('internships')}
          >
            Manage Internships
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'certifications' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('certifications')}
          >
            Manage Certifications
          </button>
        </div>
      </div>

      <div className="mt-6">
        {activeTab === 'jobs' && (
          <>
            <DataTable 
              data={jobs} 
              type="job"
              onEdit={(job) => handleEdit(job, 'job')}
              onDelete={(id) => handleDelete(id, 'job')}
            />
            <Pagination 
              currentPage={jobsPage}
              totalPages={jobsTotalPages}
              setPage={setJobsPage}
            />
          </>
        )}

        {activeTab === 'internships' && (
          <>
            <DataTable 
              data={internships}
              type="internship"
              onEdit={(internship) => handleEdit(internship, 'internship')}
              onDelete={(id) => handleDelete(id, 'internship')}
            />
            <Pagination 
              currentPage={internshipsPage}
              totalPages={internshipsTotalPages}
              setPage={setInternshipsPage}
            />
          </>
        )}

        {activeTab === 'certifications' && (
          <>
            <DataTable 
              data={certifications}
              type="certification"
              onEdit={(certification) => handleEdit(certification, 'certification')}
              onDelete={(id) => handleDelete(id, 'certification')}
            />
            <Pagination 
              currentPage={certificationsPage}
              totalPages={certificationsTotalPages}
              setPage={setCertificationsPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
