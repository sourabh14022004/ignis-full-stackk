import React from 'react';

interface JobSkillsProps {
  skills: string[];
}

export function JobSkills({ skills }: JobSkillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.slice(0, 5).map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
      {skills.length > 5 && (
        <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm">
          +{skills.length - 5} more
        </span>
      )}
    </div>
  );
}