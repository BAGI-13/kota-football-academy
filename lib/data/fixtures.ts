// lib/data/fixtures.ts

export type Match = {
  id: string;
  date: string;            // ISO 8601: "2026-04-05"
  time: string;            // "15:30"
  opponent: string;
  opponentLogoUrl: string; // Placeholder until real crests are added
  venue: 'Home' | 'Away';
  competition: string;
  team: 'Senior' | 'U-18' | 'U-12';
  result?: {
    kotaScore: number;
    opponentScore: number;
  };
  matchReport?: string;    // 2-3 sentence summary for completed matches
  isUpcoming: boolean;
};

export const matches: Match[] = [

  // ─── UPCOMING FIXTURES (8) ─────────────────────────────────────────────────

  {
    id: 'upcoming-1',
    date: '2026-04-05',
    time: '15:30',
    opponent: 'Jaipur FC',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Home',
    competition: 'Rajasthan State League',
    team: 'Senior',
    isUpcoming: true,
  },
  {
    id: 'upcoming-2',
    date: '2026-04-08',
    time: '11:00',
    opponent: 'Ajmer United',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Away',
    competition: 'Rajasthan State U-18 Championship',
    team: 'U-18',
    isUpcoming: true,
  },
  {
    id: 'upcoming-3',
    date: '2026-04-12',
    time: '09:30',
    opponent: 'Kota Dynamos',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Home',
    competition: 'Rajasthan U-12 Cup',
    team: 'U-12',
    isUpcoming: true,
  },
  {
    id: 'upcoming-4',
    date: '2026-04-15',
    time: '16:00',
    opponent: 'Udaipur Athletic',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Away',
    competition: 'Rajasthan State League',
    team: 'Senior',
    isUpcoming: true,
  },
  {
    id: 'upcoming-5',
    date: '2026-04-19',
    time: '10:30',
    opponent: 'Jodhpur Youth FC',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Home',
    competition: 'Rajasthan State U-18 Championship',
    team: 'U-18',
    isUpcoming: true,
  },
  {
    id: 'upcoming-6',
    date: '2026-04-26',
    time: '15:00',
    opponent: 'Bikaner FC',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Home',
    competition: 'AIFF State Development League',
    team: 'Senior',
    isUpcoming: true,
  },
  {
    id: 'upcoming-7',
    date: '2026-05-03',
    time: '09:00',
    opponent: 'Rajasthan Rangers',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Away',
    competition: 'Rajasthan U-12 Cup',
    team: 'U-12',
    isUpcoming: true,
  },
  {
    id: 'upcoming-8',
    date: '2026-05-10',
    time: '11:30',
    opponent: 'Pushkar SC',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Home',
    competition: 'Rajasthan State U-18 Championship',
    team: 'U-18',
    isUpcoming: true,
  },

  // ─── PAST RESULTS (10) ────────────────────────────────────────────────────

  {
    id: 'result-1',
    date: '2026-03-22',
    time: '15:30',
    opponent: 'Sikar City FC',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Home',
    competition: 'Rajasthan State League',
    team: 'Senior',
    result: { kotaScore: 3, opponentScore: 1 },
    matchReport:
      'A dominant home display saw Kota FA cruise to victory. Deepak Chauhan grabbed a brace in the first half before Ravi Prakash sealed the win with a well-struck long-range effort in the 67th minute.',
    isUpcoming: false,
  },
  {
    id: 'result-2',
    date: '2026-03-18',
    time: '11:00',
    opponent: 'Ajmer United',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Away',
    competition: 'Rajasthan State U-18 Championship',
    team: 'U-18',
    result: { kotaScore: 2, opponentScore: 0 },
    matchReport:
      'An impressive away clean sheet from Karan Rathore helped secure a vital three points. Goals from Arjun Meena and Rahul Yadav in either half put the tie beyond doubt.',
    isUpcoming: false,
  },
  {
    id: 'result-3',
    date: '2026-03-15',
    time: '09:30',
    opponent: 'Bundi United',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Home',
    competition: 'Rajasthan U-12 Cup',
    team: 'U-12',
    result: { kotaScore: 1, opponentScore: 1 },
    matchReport:
      'A hard-fought draw at home saw the U-12s show great resilience. Sanjay Kumar opened the scoring before Bundi levelled late on, denying Kota FA the win.',
    isUpcoming: false,
  },
  {
    id: 'result-4',
    date: '2026-03-08',
    time: '16:00',
    opponent: 'Udaipur Athletic',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Away',
    competition: 'Rajasthan State League',
    team: 'Senior',
    result: { kotaScore: 0, opponentScore: 2 },
    matchReport:
      'A difficult trip to Udaipur ended in defeat as two set-piece goals in the second half proved the difference. Kota FA created several chances but were unable to convert on the day.',
    isUpcoming: false,
  },
  {
    id: 'result-5',
    date: '2026-03-05',
    time: '10:30',
    opponent: 'Jodhpur Youth FC',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Away',
    competition: 'Rajasthan State U-18 Championship',
    team: 'U-18',
    result: { kotaScore: 3, opponentScore: 2 },
    matchReport:
      'A dramatic away victory sealed with a 90th-minute winner by Vikram Joshi. The U-18s came from behind twice before Joshi\'s curling finish sent the travelling fans wild.',
    isUpcoming: false,
  },
  {
    id: 'result-6',
    date: '2026-02-22',
    time: '15:00',
    opponent: 'Bikaner FC',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Home',
    competition: 'AIFF State Development League',
    team: 'Senior',
    result: { kotaScore: 2, opponentScore: 1 },
    matchReport:
      'Two first-half goals from Deepak Chauhan and Mohit Singh proved enough despite a nervy finish. Bikaner pulled one back with ten minutes remaining but Ankit Sharma made a crucial save to hold the lead.',
    isUpcoming: false,
  },
  {
    id: 'result-7',
    date: '2026-02-19',
    time: '09:00',
    opponent: 'Rajasthan Rangers',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Home',
    competition: 'Rajasthan U-12 Cup',
    team: 'U-12',
    result: { kotaScore: 4, opponentScore: 0 },
    matchReport:
      'The U-12s recorded their biggest win of the season with an emphatic four-goal display. Sanjay Kumar bagged a hat-trick with Vijay Sharma adding a fourth from midfield.',
    isUpcoming: false,
  },
  {
    id: 'result-8',
    date: '2026-02-15',
    time: '16:30',
    opponent: 'Pushkar SC',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Away',
    competition: 'Rajasthan State League',
    team: 'Senior',
    result: { kotaScore: 1, opponentScore: 1 },
    matchReport:
      'A well-contested draw away from home. Ravi Prakash scored a late equaliser to deny Pushkar SC all three points and keep Kota FA\'s unbeaten run at three games.',
    isUpcoming: false,
  },
  {
    id: 'result-9',
    date: '2026-02-08',
    time: '11:00',
    opponent: 'Bikaner Youth',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Away',
    competition: 'Rajasthan State U-18 Championship',
    team: 'U-18',
    result: { kotaScore: 1, opponentScore: 3 },
    matchReport:
      'A tough away day for the U-18s, who were undone by two defensive errors in the opening twenty minutes. Rahul Yadav grabbed a consolation but the team could not stage a comeback.',
    isUpcoming: false,
  },
  {
    id: 'result-10',
    date: '2026-02-01',
    time: '15:30',
    opponent: 'Alwar FC',
    opponentLogoUrl: '/SVG/shield-placeholder.svg',
    venue: 'Home',
    competition: 'Rajasthan State League',
    team: 'Senior',
    result: { kotaScore: 2, opponentScore: 0 },
    matchReport:
      'A professional home performance secured a clean sheet and three points. Suresh Kumar headed in a corner before Deepak Chauhan added a second on the break to put the game to bed.',
    isUpcoming: false,
  },
];
