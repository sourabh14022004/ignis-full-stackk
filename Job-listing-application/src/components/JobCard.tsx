import React from 'react';
import { MapPin, Clock, Building2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import type { Job } from '../types/job';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
          <div className="flex items-center gap-4 mt-2 text-gray-600">
            <div className="flex items-center gap-1">
              <Building2 size={18} />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={18} />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={18} />
              <span>{formatDistanceToNow(new Date(job.postedAt))} ago</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-gray-900">
            {job.salary.currency}{job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()}/{job.salary.period}
          </div>
          <span className="text-sm text-gray-600">{job.employmentType}</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {job.skills.slice(0, 5).map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 5 && (
            <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm">
              +{job.skills.length - 5} more
            </span>
          )}
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className={`
          px-3 py-1 rounded-full text-sm
          ${job.locationType === 'Remote' ? 'bg-green-50 text-green-600' : 
            job.locationType === 'Hybrid' ? 'bg-purple-50 text-purple-600' : 
            'bg-orange-50 text-orange-600'}
        `}>
          {job.locationType}
        </span>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
}