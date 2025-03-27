import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL_BACKEND || process.env.REACT_APP_API_URL_BACKEND;



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

/* -------------------------- Admin APIs -------------------------- */
export const loginAdmin = async (credentials) => {
  const response = await api.post('/admin/login', credentials);
  return response.data;
};

export const addAdmin = async (adminData) => {
  const response = await api.post('/admin/add', adminData);
  return response.data;
};

/* -------------------------- Jobs APIs -------------------------- */
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

/* -------------------------- Non-Tech Jobs APIs -------------------------- */
export const getAllNonTechJobs = async (page = 1, search = "") => {
  const response = await api.get(`/nontechjobs?page=${page}&search=${search}`);
  return response.data;
};

export const getNonTechJob = async (id) => {
  const response = await api.get(`/nontechjobs/${id}`);
  return response.data;
};

export const createNonTechJob = async (jobData) => {
  const response = await api.post(`/nontechjobs`, jobData );
  return response.data;
};

export const updateNonTechJob = async (id, jobData) => {
  const response = await api.put(`/nontechjobs/${id}`, jobData);
  return response.data;
};

export const deleteNonTechJob = async (id) => {
  const response = await api.delete(`/nontechjobs/${id}`);
  return response.data;
};

/* -------------------------- Internships APIs -------------------------- */
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

export const updateInternship = async (id, data) => {
  const response = await api.put(`/internships/${id}`, data);
  return response.data;
};

export const deleteInternship = async (id) => {
  const response = await api.delete(`/internships/${id}`);
  return response.data;
};

/* -------------------------- Certifications APIs -------------------------- */
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

export const updateCertification = async (id, data) => {
  const response = await api.put(`/certifications/${id}`, data);
  return response.data;
};

export const deleteCertification = async (id) => {
  const response = await api.delete(`/certifications/${id}`);
  return response.data;
};

/* -------------------------- Major Projects APIs -------------------------- */
export const getAllMajorProjects = async (page = 1, search = '') => {
  try {
    const response = await api.get(`/majorproject?page=${page}&search=${search}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching major projects:", error.response?.data || error.message);
    return { projects: [], totalPages: 1 }; // Ensure fallback response
  }
};


export const getMajorProject = async (id) => {
  const response = await api.get(`/majorproject/${id}`);
  return response.data;
};

export const createMajorProject = async (projectData) => {
  const response = await api.post('/majorproject', projectData);
  return response.data;
};

export const updateMajorProject = async (id, projectData) => {
  const response = await api.put(`/majorproject/${id}`, projectData);
  return response.data;
};

export const deleteMajorProject = async (id) => {
  const response = await api.delete(`/majorproject/${id}`);
  return response.data;
};

/* -------------------------- Minor Projects APIs -------------------------- */
export const getAllMinorProjects = async (page = 1, search = '') => {
  const response = await api.get(`/minorprojects?page=${page}&search=${search}`);
  return response.data;
};

export const getMinorProject = async (id) => {
  const response = await api.get(`/minorprojects/${id}`);
  return response.data;
};

export const createMinorProject = async (projectData) => {
  const response = await api.post('/minorprojects', projectData);
  return response.data;
};

export const updateMinorProject = async (id, projectData) => {
  const response = await api.put(`/minorprojects/${id}`, projectData);
  return response.data;
};

export const deleteMinorProject = async (id) => {
  const response = await api.delete(`/minorprojects/${id}`);
  return response.data;
};
