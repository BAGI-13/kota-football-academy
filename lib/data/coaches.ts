// lib/data/coaches.ts

export type Coach = {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  license: string;
  experience: string;
  specialization: string;
  bio: string;
};

export const coaches: Coach[] = [
  {
    id: 'gurmail-singh',
    name: 'GURMAIL SINGH',
    title: 'Head Coach',
    imageUrl: '/g.png',
    license: 'AFC B License',
    experience: '10+ years',
    specialization: 'Tactical Development & Senior Team Management',
    bio: 'With over a decade of professional coaching experience, Gurmail leads the senior program with tactical discipline and a player-first philosophy.',
  },
  {
    id: 'nitin-jangra',
    name: 'NITIN JANGRA',
    title: 'Youth Development Coach',
    imageUrl: '/n.png',
    license: 'AFC B License',
    experience: '7+ years',
    specialization: 'Youth Development & Skill Fundamentals',
    bio: 'Nitin specializes in building technical foundations in young players, guiding the U-12 and U-18 programs with patience and precision.',
  },
  {
    id: 'aman-kumar',
    name: 'AMAN KUMAR',
    title: 'Fitness & Conditioning Expert',
    imageUrl: '/aman.png',
    license: 'AIFF D License / B.P.Ed Graduate',
    experience: '5+ years',
    specialization: 'Physical Conditioning & Injury Prevention',
    bio: 'Aman designs bespoke fitness programs that push players to their peak while minimizing injury risk through science-backed methodology.',
  },
];
