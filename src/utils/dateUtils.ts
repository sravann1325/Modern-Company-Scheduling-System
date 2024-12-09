import { format } from 'date-fns';

export const formatDateTime = (date: string) => {
  return format(new Date(date), 'MMM d, h:mm a');
};

export const formatTime = (time: string) => {
  return format(new Date(`1970-01-01 ${time}`), 'h:mm a');
};