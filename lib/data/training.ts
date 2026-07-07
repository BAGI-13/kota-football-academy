// lib/data/training.ts

export type SessionType = 'Technical' | 'Tactical' | 'Fitness' | 'Match Simulation' | 'Goalkeeper';

export type TrainingSession = {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  startTime: string;    // "08:00"
  endTime: string;      // "10:00"
  title: string;
  coach: string;
  team: 'Senior' | 'U-18' | 'U-12' | 'All';
  type: SessionType;
  venue: string;
  maxParticipants: number;
  notes?: string;
};

export const trainingSessions: TrainingSession[] = [

  // ─── MONDAY ──────────────────────────────────────────────────────────────

  {
    id: 'mon-u12-tech',
    day: 'Monday',
    startTime: '07:00',
    endTime: '09:00',
    title: 'U-12 Technical Fundamentals',
    coach: 'Nitin Jangra',
    team: 'U-12',
    type: 'Technical',
    venue: 'Training Pitch B',
    maxParticipants: 20,
    notes: 'Focus on first touch, close control, and short passing combinations. Bring cones and bibs.',
  },
  {
    id: 'mon-senior-fitness',
    day: 'Monday',
    startTime: '17:30',
    endTime: '19:30',
    title: 'Senior Fitness & Conditioning',
    coach: 'Rahul Malhotra',
    team: 'Senior',
    type: 'Fitness',
    venue: 'Main Grass Pitch',
    maxParticipants: 25,
    notes: 'High-intensity interval runs, agility ladders, and resistance bands. Trainers required.',
  },

  // ─── TUESDAY ─────────────────────────────────────────────────────────────

  {
    id: 'tue-u18-tactical',
    day: 'Tuesday',
    startTime: '07:00',
    endTime: '09:00',
    title: 'U-18 Tactical Workshop',
    coach: 'Arjun Verma',
    team: 'U-18',
    type: 'Tactical',
    venue: 'Training Pitch A',
    maxParticipants: 22,
    notes: 'Pressing triggers, defensive shape in a 4-3-3. Video session follows training.',
  },
  {
    id: 'tue-senior-tech',
    day: 'Tuesday',
    startTime: '17:30',
    endTime: '19:30',
    title: 'Senior Technical Drills',
    coach: 'Rahul Malhotra',
    team: 'Senior',
    type: 'Technical',
    venue: 'Main Grass Pitch',
    maxParticipants: 25,
    notes: 'Rondo, positional play patterns, and crossing/finishing in the final third.',
  },

  // ─── WEDNESDAY ───────────────────────────────────────────────────────────

  {
    id: 'wed-u12-fitness',
    day: 'Wednesday',
    startTime: '07:00',
    endTime: '08:30',
    title: 'U-12 Fitness & Agility',
    coach: 'Nitin Jangra',
    team: 'U-12',
    type: 'Fitness',
    venue: 'Gymnasium',
    maxParticipants: 20,
    notes: 'Bodyweight circuits, coordination drills, and fun relay races. Sports shoes mandatory.',
  },
  {
    id: 'wed-u18-matchsim',
    day: 'Wednesday',
    startTime: '10:00',
    endTime: '12:00',
    title: 'U-18 Match Simulation',
    coach: 'Arjun Verma',
    team: 'U-18',
    type: 'Match Simulation',
    venue: 'Main Grass Pitch',
    maxParticipants: 22,
    notes: '9v9 practice match with coach interventions. Focus on transition play.',
  },
  {
    id: 'wed-senior-tactical',
    day: 'Wednesday',
    startTime: '17:30',
    endTime: '19:30',
    title: 'Senior Tactical Analysis',
    coach: 'Rahul Malhotra',
    team: 'Senior',
    type: 'Tactical',
    venue: 'Video Analysis Room',
    maxParticipants: 25,
    notes: 'Opposition analysis + set-piece rehearsal. Laptop or tablet recommended.',
  },

  // ─── THURSDAY ────────────────────────────────────────────────────────────

  {
    id: 'thu-u12-tactical',
    day: 'Thursday',
    startTime: '07:00',
    endTime: '09:00',
    title: 'U-12 Positional Tactics',
    coach: 'Nitin Jangra',
    team: 'U-12',
    type: 'Tactical',
    venue: 'Training Pitch B',
    maxParticipants: 20,
    notes: 'Shape-based shadow play and positional games without a keeper.',
  },
  {
    id: 'thu-u18-fitness',
    day: 'Thursday',
    startTime: '17:00',
    endTime: '19:00',
    title: 'U-18 Strength & Conditioning',
    coach: 'Arjun Verma',
    team: 'U-18',
    type: 'Fitness',
    venue: 'Gymnasium',
    maxParticipants: 22,
    notes: 'Sprint mechanics, plyometrics, and injury prevention exercises.',
  },

  // ─── FRIDAY ──────────────────────────────────────────────────────────────

  {
    id: 'fri-gk-all',
    day: 'Friday',
    startTime: '07:00',
    endTime: '09:00',
    title: 'Goalkeeper Specialist Training',
    coach: 'Sanjay Bhatt',
    team: 'All',
    type: 'Goalkeeper',
    venue: 'Main Grass Pitch',
    maxParticipants: 8,
    notes: 'Dedicated GK session: shot-stopping, distribution, crosses, and footwork. Open to all GKs across Senior, U-18, and U-12.',
  },
  {
    id: 'fri-senior-matchprep',
    day: 'Friday',
    startTime: '17:00',
    endTime: '19:30',
    title: 'Senior Match Preparation',
    coach: 'Rahul Malhotra',
    team: 'Senior',
    type: 'Match Simulation',
    venue: 'Main Grass Pitch',
    maxParticipants: 25,
    notes: 'Pre-match shape walkthrough, set-pieces, and 8v8 tempo game. Ahead of Saturday fixture.',
  },

  // ─── SATURDAY ────────────────────────────────────────────────────────────

  {
    id: 'sat-u12-matchday',
    day: 'Saturday',
    startTime: '08:00',
    endTime: '10:00',
    title: 'U-12 Inter-Squad Mini Games',
    coach: 'Nitin Jangra',
    team: 'U-12',
    type: 'Match Simulation',
    venue: 'Training Pitch B',
    maxParticipants: 20,
    notes: 'Fun-focused inter-squad match day. Parents welcome to watch from the sidelines.',
  },
  {
    id: 'sat-u18-advanced-tech',
    day: 'Saturday',
    startTime: '10:30',
    endTime: '12:30',
    title: 'U-18 Advanced Technical Session',
    coach: 'Arjun Verma',
    team: 'U-18',
    type: 'Technical',
    venue: 'Training Pitch A',
    maxParticipants: 22,
    notes: 'Advanced dribbling sequences, combination play, and pressing triggers.',
  },
  {
    id: 'sat-senior-full',
    day: 'Saturday',
    startTime: '15:00',
    endTime: '17:30',
    title: 'Senior Full Training',
    coach: 'Rahul Malhotra',
    team: 'Senior',
    type: 'Tactical',
    venue: 'Main Grass Pitch',
    maxParticipants: 25,
    notes: 'Full-squad session covering all tactical phases. Medical team present.',
  },

  // ─── SUNDAY ──────────────────────────────────────────────────────────────

  {
    id: 'sun-u18-recovery',
    day: 'Sunday',
    startTime: '09:00',
    endTime: '10:30',
    title: 'U-18 Recovery & Video Review',
    coach: 'Arjun Verma',
    team: 'U-18',
    type: 'Tactical',
    venue: 'Video Analysis Room',
    maxParticipants: 22,
    notes: 'Light stretching, performance review, and individual feedback from the weekend match.',
  },
  {
    id: 'sun-u12-skills',
    day: 'Sunday',
    startTime: '09:00',
    endTime: '11:00',
    title: 'U-12 Skills & Fun Session',
    coach: 'Nitin Jangra',
    team: 'U-12',
    type: 'Technical',
    venue: 'Training Pitch B',
    maxParticipants: 20,
    notes: 'Freestyle skills, juggling challenges, and small-sided games. Relaxed atmosphere.',
  },
];

// Session type → Tailwind classes for card colour coding
export const sessionTypeColors: Record<SessionType, string> = {
  Technical:          'bg-crimson/10 border-crimson text-crimson',
  Tactical:           'bg-charcoal/10 border-charcoal text-charcoal',
  Fitness:            'bg-gray-100 border-gray-400 text-gray-600',
  'Match Simulation': 'bg-crimson/20 border-crimson-dark text-crimson-dark',
  Goalkeeper:         'bg-charcoal/20 border-charcoal text-charcoal',
};
