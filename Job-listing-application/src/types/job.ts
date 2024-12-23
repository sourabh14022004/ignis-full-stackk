export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  locationType: 'Remote' | 'On-site' | 'Hybrid';
  salary: {
    min: number;
    max: number;
    currency: string;
    period: string;
  };
  employmentType: string;
  postedAt: string;
  updatedAt: string;
  skills: string[];
  description: string;
}