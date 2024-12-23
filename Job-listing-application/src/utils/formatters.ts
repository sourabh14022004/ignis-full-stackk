import { formatDistanceToNow } from 'date-fns';

export const formatSalary = (
  min: number | undefined,
  max: number | undefined,
  currency: string | undefined,
  period: string | undefined
): string => {
  if (min === undefined || max === undefined || !currency || !period) {
    console.error('Invalid salary data:', { min, max, currency, period });
    return 'Salary not available'; // Fallback
  }

  return `${currency}${min.toLocaleString()} - ${max.toLocaleString()}/${period}`;
};


export const formatTimeAgo = (date: string): string => {
  // Attempt to parse the date
  const parsedDate = new Date(date);

  // Check if the parsed date is valid
  if (isNaN(parsedDate.getTime())) {
    console.error('Invalid date:', date);
    return 'Unknown time'; // Fallback message
  }

  // Format the time ago using date-fns
  return formatDistanceToNow(parsedDate, { addSuffix: true });
};