// lib/data/players.ts

export type Player = {
  id: string;                // URL-safe slug: "ravi-prakash"
  name: string;
  number: number;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
  team: 'Senior' | 'U-18' | 'U-12';
  age: number;
  nationality: string;
  bio: string;
  imageUrl: string;          // Placeholder until real photos are added
  stats: {
    appearances: number;
    goals: number;
    assists: number;
    cleanSheets?: number;    // Goalkeepers only
  };
  isCaptain?: boolean;
  isFeatured?: boolean;      // Displayed as spotlight card on roster page
};

export const players: Player[] = [

  // ─── SENIOR TEAM ──────────────────────────────────────────────────────────

  {
    id: 'ravi-prakash',
    name: 'Ravi Prakash',
    number: 10,
    position: 'Midfielder',
    team: 'Senior',
    age: 22,
    nationality: 'Indian',
    bio: 'Academy graduate and current team captain. Known for his vision, passing range, and ability to control the tempo of any match. Ravi was called up to the Rajasthan State Camp in 2024.',
    imageUrl: '/players/player-1.jpg',
    stats: { appearances: 28, goals: 7, assists: 11 },
    isCaptain: true,
    isFeatured: true,
  },
  {
    id: 'ankit-sharma',
    name: 'Ankit Sharma',
    number: 1,
    position: 'Goalkeeper',
    team: 'Senior',
    age: 24,
    nationality: 'Indian',
    bio: 'A commanding presence between the posts with exceptional shot-stopping instincts. Ankit holds the academy record for clean sheets in a single season and is a key organiser of the defensive line.',
    imageUrl: '/players/player-2.jpg',
    stats: { appearances: 26, goals: 0, assists: 0, cleanSheets: 14 },
  },
  {
    id: 'suresh-kumar',
    name: 'Suresh Kumar',
    number: 5,
    position: 'Defender',
    team: 'Senior',
    age: 23,
    nationality: 'Indian',
    bio: 'A composed centre-back who reads the game superbly. Suresh brings stability to the backline with his aerial ability and precise tackling.',
    imageUrl: '/players/player-3.jpg',
    stats: { appearances: 25, goals: 2, assists: 1 },
  },
  {
    id: 'deepak-chauhan',
    name: 'Deepak Chauhan',
    number: 9,
    position: 'Forward',
    team: 'Senior',
    age: 21,
    nationality: 'Indian',
    bio: 'A natural finisher with lightning pace and clinical finishing. Deepak was the academy\'s top scorer last season and is attracting interest from regional league clubs.',
    imageUrl: '/players/player-4.jpg',
    stats: { appearances: 27, goals: 18, assists: 5 },
  },
  {
    id: 'mohit-singh',
    name: 'Mohit Singh',
    number: 3,
    position: 'Defender',
    team: 'Senior',
    age: 22,
    nationality: 'Indian',
    bio: 'An attacking left-back known for his overlapping runs and precise crosses. Mohit brings energy and width to the team and is one of the academy\'s most versatile players.',
    imageUrl: '/players/player-5.jpg',
    stats: { appearances: 24, goals: 1, assists: 6 },
  },

  // ─── U-18 TEAM ────────────────────────────────────────────────────────────

  {
    id: 'arjun-meena',
    name: 'Arjun Meena',
    number: 8,
    position: 'Midfielder',
    team: 'U-18',
    age: 17,
    nationality: 'Indian',
    bio: 'A box-to-box midfielder with tireless energy and a sharp eye for goal. Arjun was the standout performer in the state U-18 championship and earned a call-up to the regional training camp.',
    imageUrl: '/players/player-6.jpg',
    stats: { appearances: 20, goals: 5, assists: 8 },
    isFeatured: false,
  },
  {
    id: 'karan-rathore',
    name: 'Karan Rathore',
    number: 12,
    position: 'Goalkeeper',
    team: 'U-18',
    age: 17,
    nationality: 'Indian',
    bio: 'A highly-rated young goalkeeper with great reflexes and strong leadership qualities. Karan was instrumental in the U-18 team reaching the state semi-finals.',
    imageUrl: '/players/player-7.jpg',
    stats: { appearances: 18, goals: 0, assists: 0, cleanSheets: 9 },
  },
  {
    id: 'rahul-yadav',
    name: 'Rahul Yadav',
    number: 11,
    position: 'Forward',
    team: 'U-18',
    age: 16,
    nationality: 'Indian',
    bio: 'A dynamic winger with exceptional dribbling ability and an eye for scoring. Rahul is one of the most exciting attacking talents in the academy\'s junior setup.',
    imageUrl: '/players/player-8.jpg',
    stats: { appearances: 19, goals: 12, assists: 7 },
  },
  {
    id: 'amit-patel',
    name: 'Amit Patel',
    number: 4,
    position: 'Defender',
    team: 'U-18',
    age: 17,
    nationality: 'Indian',
    bio: 'A disciplined central defender who excels in 1v1 situations. Amit captained the U-16 side last season before earning promotion to the U-18 squad.',
    imageUrl: '/players/player-9.jpg',
    stats: { appearances: 17, goals: 1, assists: 2 },
    isCaptain: true,
  },
  {
    id: 'vikram-joshi',
    name: 'Vikram Joshi',
    number: 7,
    position: 'Midfielder',
    team: 'U-18',
    age: 16,
    nationality: 'Indian',
    bio: 'A creative attacking midfielder with outstanding technical ability. Vikram\'s dribbling in tight spaces and quick passing combinations make him a key creative force.',
    imageUrl: '/players/player-10.jpg',
    stats: { appearances: 16, goals: 4, assists: 9 },
  },

  // ─── U-12 TEAM ────────────────────────────────────────────────────────────

  {
    id: 'sanjay-kumar',
    name: 'Sanjay Kumar',
    number: 9,
    position: 'Forward',
    team: 'U-12',
    age: 11,
    nationality: 'Indian',
    bio: 'A natural goalscorer with great instincts in front of goal. Sanjay has shown remarkable technical development and consistently leads the U-12 scoring charts.',
    imageUrl: '/players/player-11.jpg',
    stats: { appearances: 14, goals: 10, assists: 3 },
  },
  {
    id: 'vijay-sharma',
    name: 'Vijay Sharma',
    number: 6,
    position: 'Midfielder',
    team: 'U-12',
    age: 12,
    nationality: 'Indian',
    bio: 'A technically gifted midfielder who shows maturity well beyond his years. Vijay has impressed coaches with his understanding of the game and composure on the ball.',
    imageUrl: '/players/player-12.jpg',
    stats: { appearances: 15, goals: 3, assists: 6 },
    isCaptain: true,
  },
  {
    id: 'rohan-das',
    name: 'Rohan Das',
    number: 2,
    position: 'Defender',
    team: 'U-12',
    age: 11,
    nationality: 'Indian',
    bio: 'A tenacious defender who is always first to the ball. Rohan\'s enthusiasm and work rate make him a standout prospect in the academy\'s youngest competitive age group.',
    imageUrl: '/players/player-13.jpg',
    stats: { appearances: 13, goals: 0, assists: 1 },
  },
  {
    id: 'priya-verma',
    name: 'Priya Verma',
    number: 16,
    position: 'Midfielder',
    team: 'U-12',
    age: 12,
    nationality: 'Indian',
    bio: 'One of the brightest prospects in the academy. Priya\'s technical ability, work ethic, and football intelligence are exceptional for her age group.',
    imageUrl: '/players/player-14.jpg',
    stats: { appearances: 14, goals: 4, assists: 5 },
  },
  {
    id: 'nikhil-gupta',
    name: 'Nikhil Gupta',
    number: 13,
    position: 'Goalkeeper',
    team: 'U-12',
    age: 11,
    nationality: 'Indian',
    bio: 'A brave and agile goalkeeper with excellent shot-stopping ability. Nikhil trains under the dedicated goalkeeping programme and has shown rapid improvement.',
    imageUrl: '/players/player-15.jpg',
    stats: { appearances: 12, goals: 0, assists: 0, cleanSheets: 6 },
  },
];
