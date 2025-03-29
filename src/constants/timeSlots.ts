import { TimeSlot } from '../types';

export const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const timeSlots: TimeSlot[] = [
  { start: '10:15', end: '11:15', display: '10:15 AM - 11:15 AM' },
  { start: '11:15', end: '12:15', display: '11:15 AM - 12:15 PM' },
  { start: '12:15', end: '13:15', display: '12:15 PM - 1:15 PM' },
  { start: '13:15', end: '14:15', display: '1:15 PM - 2:15 PM' },
  { start: '14:15', end: '15:15', display: '2:15 PM - 3:15 PM' },
  { start: '15:15', end: '16:15', display: '3:15 PM - 4:15 PM' }
];