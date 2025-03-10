import axios from 'axios';

const API_URL = 'https://backend-gl.onrender.com/api';


const api = axios.create({
  baseURL: API_URL
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginAdmin = async (credentials) => {
  const response = await api.post('/admin/login', credentials);
  return response.data;
};

export const addAdmin = async (adminData) => {
  const response = await api.post('/admin/add', adminData);
  return response.data;
};

export const getAllJobs = async (page = 1, search = '') => {
  const response = await api.get(`/jobs?page=${page}&search=${search}`);
  return response.data;
};

export const getJob = async (id) => {
  const response = await api.get(`/jobs/${id}`);
  return response.data;
};

export const createJob = async (jobData) => {
  const response = await api.post('/jobs', jobData);
  return response.data;
};

export const updateJob = async (id, jobData) => {
  const response = await api.put(`/jobs/${id}`, jobData);
  return response.data;
};

export const deleteJob = async (id) => {
  const response = await api.delete(`/jobs/${id}`);
  return response.data;
  
};
export const getAllInternships = async (page = 1, search = '') => {
  const response = await api.get(`/internships?page=${page}&search=${search}`);
  return response.data;
};

export const getInternship = async (id) => {
  const response = await api.get(`/internships/${id}`);
  return response.data;
};

export const createInternship = async (internshipData) => {
  const response = await api.post('/internships', internshipData);
  return response.data;
};

export const getAllCertifications = async (page = 1, search = '') => {
  const response = await api.get(`/certifications?page=${page}&search=${search}`);
  return response.data;
};

export const getCertification = async (id) => {
  const response = await api.get(`/certifications/${id}`);
  return response.data;
};

export const createCertification = async (certificationData) => {
  const response = await api.post('/certifications', certificationData);
  return response.data;
};
export const deleteInternship = async (id) => {
  const response = await api.delete(`/internships/${id}`);
  return response.data;
};

export const updateInternship = async (id, data) => {
  const response = await api.put(`/internships/${id}`, data);
  return response.data;
};

export const deleteCertification = async (id) => {
  const response = await api.delete(`/certifications/${id}`);
  return response.data;
};

export const updateCertification = async (id, data) => {
  const response = await api.put(`/certifications/${id}`, data);
  return response.data;
};
// export const fetchAdminData = async () => {
//     const response = await api.get('/admin/data'); // Adjust the endpoint if needed
//     return response.data;
//   };
  
// export const postJob = async (jobData) => {
//     const response = await api.post('/jobs', jobData);
//     return response.data;
//   };
  