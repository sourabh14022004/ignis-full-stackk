import React, { useState, useEffect } from 'react';
import { Header } from './components/Layout/Header';
import { SearchBar } from './components/Search/SearchBar';
import { JobList } from './components/JobList/JobList';
import { LoadingSpinner } from './components/UI/LoadingSpinner';
import { fetchJobs } from './utils/api';
import type { Job } from './types/job';

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async (searchQuery?: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchJobs(searchQuery);
      setJobs(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch jobs. Please try again later.';
      setError(errorMessage);
      // Safely log error information
      console.error('Error fetching jobs:', {
        message: errorMessage,
        name: err instanceof Error ? err.name : 'Unknown Error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    loadJobs(query);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SearchBar onSearch={handleSearch} />
        
        <div className="mt-8">
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="text-center text-red-600 bg-red-50 p-4 rounded-lg">
              {error}
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center text-gray-600 bg-gray-50 p-8 rounded-lg">
              No jobs found. Try adjusting your search criteria.
            </div>
          ) : (
            <JobList jobs={jobs} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;