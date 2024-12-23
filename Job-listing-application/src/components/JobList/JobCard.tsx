import React from "react";
import { MapPin, Clock, Building2 } from "lucide-react";
import { JobSkills } from "./JobSkills";
import { formatSalary, formatTimeAgo } from "../../utils/formatters";
import type { Job } from "../../types/job";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const locationTypeClasses = {
    Remote: "bg-green-50 text-green-600",
    Hybrid: "bg-purple-50 text-purple-600",
    "On-site": "bg-orange-50 text-orange-600",
  };

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
              <span>
                {job.postedAt ? formatTimeAgo(job.postedAt) : "Unknown time"}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-gray-900">
            {job.salary
              ? formatSalary(
                  job.salary.min,
                  job.salary.max,
                  job.salary.currency,
                  job.salary.period
                )
              : "Salary not available"}
          </div>

          <span className="text-sm text-gray-600">{job.employmentType}</span>
        </div>
      </div>
      <div className="mt-4">
        <JobSkills skills={job.skills} />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            locationTypeClasses[job.locationType]
          }`}
        >
          {job.locationType}
        </span>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
}
