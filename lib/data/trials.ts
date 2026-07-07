// lib/data/trials.ts

export type TrialDate = {
  id: string;
  date: string;      // ISO: "2026-04-12"
  time: string;      // "09:00 AM"
  ageGroup: string;  // "U-12 (Ages 8–12)"
  venue: string;
  spotsLeft: number;
  isFull: boolean;
};

export const trialDates: TrialDate[] = [
  {
    id: 'trial-1',
    date: '2026-04-12',
    time: '09:00 AM',
    ageGroup: 'U-12 (Ages 8–12)',
    venue: 'Main Academy Ground, Kota',
    spotsLeft: 8,
    isFull: false,
  },
  {
    id: 'trial-2',
    date: '2026-04-18',
    time: '10:00 AM',
    ageGroup: 'U-18 (Ages 13–17)',
    venue: 'Main Academy Ground, Kota',
    spotsLeft: 5,
    isFull: false,
  },
  {
    id: 'trial-3',
    date: '2026-04-25',
    time: '07:00 AM',
    ageGroup: 'Senior (Ages 18+)',
    venue: 'Main Academy Ground, Kota',
    spotsLeft: 3,
    isFull: false,
  },
  {
    id: 'trial-4',
    date: '2026-05-10',
    time: '09:00 AM',
    ageGroup: 'U-12 (Ages 8–12)',
    venue: 'Training Pitch B, Kota',
    spotsLeft: 0,
    isFull: true,
  },
  {
    id: 'trial-5',
    date: '2026-05-17',
    time: '10:00 AM',
    ageGroup: 'U-18 (Ages 13–17)',
    venue: 'Main Academy Ground, Kota',
    spotsLeft: 12,
    isFull: false,
  },
  {
    id: 'trial-6',
    date: '2026-05-24',
    time: '07:00 AM',
    ageGroup: 'Senior (Ages 18+)',
    venue: 'Main Academy Ground, Kota',
    spotsLeft: 6,
    isFull: false,
  },
];
