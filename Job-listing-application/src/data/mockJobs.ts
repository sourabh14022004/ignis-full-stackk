import { Job } from '../types/job';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    locationType: 'Remote',
    salary: {
      min: 120000,
      max: 180000,
      currency: '$',
      period: 'year'
    },
    employmentType: 'Full Time',
    postedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    updatedAt: new Date().toISOString(),
    skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    description: 'Looking for an experienced full-stack developer to join our remote team.'
  },
  {
    id: '2',
    title: 'Frontend Engineer',
    company: 'InnovateTech',
    location: 'New York, NY',
    locationType: 'Hybrid',
    salary: {
      min: 90000,
      max: 140000,
      currency: '$',
      period: 'year'
    },
    employmentType: 'Full Time',
    postedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    updatedAt: new Date().toISOString(),
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Redux', 'Tailwind'],
    description: 'Join our frontend team to build beautiful and responsive web applications.'
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    company: 'CloudScale Systems',
    location: 'Austin, TX',
    locationType: 'On-site',
    salary: {
      min: 110000,
      max: 160000,
      currency: '$',
      period: 'year'
    },
    employmentType: 'Contract',
    postedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    updatedAt: new Date().toISOString(),
    skills: ['Kubernetes', 'AWS', 'Docker', 'Jenkins', 'Terraform', 'Linux'],
    description: 'Seeking a DevOps engineer to improve our infrastructure and deployment processes.'
  },
  {
    id: '4',
    title: 'UI/UX Designer',
    company: 'DesignFirst Co',
    location: 'Seattle, WA',
    locationType: 'Remote',
    salary: {
      min: 85000,
      max: 130000,
      currency: '$',
      period: 'year'
    },
    employmentType: 'Full Time',
    postedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    updatedAt: new Date().toISOString(),
    skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research', 'Prototyping'],
    description: 'Create beautiful and intuitive user interfaces for our products.'
  },
  {
    id: '5',
    title: 'Backend Developer',
    company: 'DataFlow Inc',
    location: 'Boston, MA',
    locationType: 'Hybrid',
    salary: {
      min: 100000,
      max: 150000,
      currency: '$',
      period: 'year'
    },
    employmentType: 'Full Time',
    postedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    updatedAt: new Date().toISOString(),
    skills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'API Design', 'GraphQL'],
    description: 'Build scalable backend services for our growing platform.'
  },
  {
    id: '6',
    title: 'Backend Developer',
    company: 'DataFlow Inc',
    location: 'Boston, MA',
    locationType: 'Hybrid',
    salary: {
      min: 100000,
      max: 150000,
      currency: '$',
      period: 'year'
    },
    employmentType: 'Full Time',
    postedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    updatedAt: new Date().toISOString(),
    skills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'API Design', 'GraphQL'],
    description: 'Build scalable backend services for our growing platform.'
  },
  {
    id: '7',
    title: 'Backend Developer',
    company: 'DataFlow Inc',
    location: 'Boston, MA',
    locationType: 'Hybrid',
    salary: {
      min: 100000,
      max: 150000,
      currency: '$',
      period: 'year'
    },
    employmentType: 'Full Time',
    postedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    updatedAt: new Date().toISOString(),
    skills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'API Design', 'GraphQL'],
    description: 'Build scalable backend services for our growing platform.'
  },
  {
    id: '8',
    title: 'Backend Developer',
    company: 'DataFlow Inc',
    location: 'Boston, MA',
    locationType: 'Hybrid',
    salary: {
      min: 100000,
      max: 150000,
      currency: '$',
      period: 'year'
    },
    employmentType: 'Full Time',
    postedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    updatedAt: new Date().toISOString(),
    skills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'API Design', 'GraphQL'],
    description: 'Build scalable backend services for our growing platform.'
  },{
    id: '9',
    title: 'Backend Developer',
    company: 'DataFlow Inc',
    location: 'Boston, MA',
    locationType: 'Hybrid',
    salary: {
      min: 100000,
      max: 150000,
      currency: '$',
      period: 'year'
    },
    employmentType: 'Full Time',
    postedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    updatedAt: new Date().toISOString(),
    skills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'API Design', 'GraphQL'],
    description: 'Build scalable backend services for our growing platform.'
  },{
    id: '10',
    title: 'Backend Developer',
    company: 'DataFlow Inc',
    location: 'Boston, MA',
    locationType: 'Hybrid',
    salary: {
      min: 100000,
      max: 150000,
      currency: '$',
      period: 'year'
    },
    employmentType: 'Full Time',
    postedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    updatedAt: new Date().toISOString(),
    skills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'API Design', 'GraphQL'],
    description: 'Build scalable backend services for our growing platform.'
  }
];