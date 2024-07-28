import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import moment from 'moment';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (i: string) => {
  return moment(i).format('MMM Do YY');
};
export const checkStatus = (status: string) => {
  switch (status) {
    case 'ACTIVE':
      return 'text-green-500';
    case 'SUCCESS':
      return 'text-green-500';
    case 'INACTIVE':
      return 'text-yellow-400';
    case 'PENDING':
      return 'text-yellow-500';
    default:
      return 'text-red-500';
  }
};
export function formatNaira(amount: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(amount);
}
