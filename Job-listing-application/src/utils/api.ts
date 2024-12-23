import axios from 'axios';
import type { Job } from '../types/job';
import { mockJobs } from '../data/mockJobs';

const API_BASE_URL = 'http://localhost:8000/api';

export const fetchJobs = async (searchQuery?: string): Promise<Job[]> => {
  const response = await axios.get(`${API_BASE_URL}/jobs/`, {
    params: { search: searchQuery }
  });
  return response.data;
};

// export const fetchJobs = async (searchQuery?: string): Promise<Job[]> => {
//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   if (!searchQuery) {
//     return mockJobs;
//   }

//   // Simple search implementation
//   const normalizedQuery = searchQuery.toLowerCase();
//   return mockJobs.filter(job => 
//     job.title.toLowerCase().includes(normalizedQuery) ||
//     job.company.toLowerCase().includes(normalizedQuery) ||
//     job.location.toLowerCase().includes(normalizedQuery) ||
//     job.skills.some(skill => skill.toLowerCase().includes(normalizedQuery))
//   );
// };