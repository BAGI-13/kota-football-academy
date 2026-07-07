// lib/data/news.ts

export type NewsCategory =
  | 'Match Report'
  | 'Academy News'
  | 'Player Spotlight'
  | 'Event'
  | 'Announcement';

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: NewsCategory;
  imageUrl: string;
  isFeatured?: boolean;
  tags?: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: 'kota-fa-wins-rajasthan-state-league-2025',
    title: 'Kota FA Clinch Rajasthan State League Title with Dominant Season Finale',
    excerpt:
      'A masterful 3-0 victory over Jaipur FC sealed the Rajasthan State League championship for Kota FA, capping an unbeaten home record across the entire campaign.',
    content: `It was the moment every player, coach, and supporter had been working towards. On a sun-drenched Saturday afternoon at the Academy Ground, Kota Football Academy lifted the Rajasthan State League trophy with a commanding 3-0 win over Jaipur FC in the season's final fixture.

Deepak Chauhan opened the scoring in the 14th minute with a precise low finish into the bottom corner, capitalizing on a brilliant through-ball from captain Ravi Prakash. The crowd erupted, and Kota FA never looked back.

Suresh Kumar doubled the advantage just before half-time, rising highest to meet a corner and powering a header past the Jaipur goalkeeper. The second half saw Kota FA in cruise control, and Chauhan completed his brace in the 71st minute to seal the title in style.

Head Coach Gurmail Singh was emotional after the final whistle. "This group of players has been exceptional all season. They work incredibly hard every single day in training, and this trophy is a reflection of that dedication and sacrifice," he said.

The win brought Kota FA's final league points tally to 72 — a record for the club — and capped an unbeaten home run across the entire campaign. Goalkeeper Ankit Sharma claimed the Golden Glove award with 18 clean sheets across all competitions.

Looking ahead, the club will now focus on the pre-season preparations for the 2025-26 campaign, with new trial dates already announced for all three age groups.`,
    author: 'Kota FA Media Team',
    publishedAt: '2025-11-28',
    category: 'Match Report',
    imageUrl: '/SVG/fixtures-graphic.svg',
    isFeatured: true,
    tags: ['State League', 'Senior Team', 'Champions', 'Match Report'],
  },
  {
    slug: 'ravi-prakash-state-camp-call-up',
    title: 'Captain Ravi Prakash Earns Rajasthan State Camp Call-Up',
    excerpt:
      'Kota FA skipper Ravi Prakash has been selected for the Rajasthan State Football Training Camp, marking a landmark moment in his career.',
    content: `Kota Football Academy is proud to announce that Senior team captain Ravi Prakash has received a call-up to the Rajasthan State Football Training Camp, becoming the first player from the academy to earn state-level recognition.

The 22-year-old midfielder has been in outstanding form this season, registering 7 goals and 11 assists in all competitions. His ability to control the tempo of a match and his leadership qualities both on and off the pitch have clearly caught the eye of the state selectors.

"I'm incredibly proud and grateful for this opportunity," Ravi said following the announcement. "Everything I have learned at this academy — from the technical sessions to the tactical workshops — has prepared me for this moment. I want to make the academy and everyone who believed in me proud."

Head Coach Gurmail Singh described the call-up as "fully deserved" and highlighted Ravi's incredible work ethic as a key factor in his development. "He arrives first and leaves last. That mentality is what separates him," Singh added.

The camp will take place over two weeks in Jaipur, with players assessed for the state senior squad ahead of the upcoming inter-state championship. Kota FA wishes Ravi all the best.`,
    author: 'Kota FA Media Team',
    publishedAt: '2025-10-14',
    category: 'Player Spotlight',
    imageUrl: '/SVG/roster-illustration.svg',
    tags: ['Player Spotlight', 'State Camp', 'Senior Team', 'Ravi Prakash'],
  },
  {
    slug: 'u18-championship-semi-finals-2025',
    title: 'U-18 Squad Reaches State Championship Semi-Finals',
    excerpt:
      'A dramatic penalty shootout win over Bikaner Youth sends the U-18 squad into the last four of the Rajasthan State U-18 Championship.',
    content: `The Kota FA Under-18 squad produced a nerves-of-steel performance to defeat Bikaner Youth on penalties and book their place in the semi-finals of the Rajasthan State U-18 Championship.

After a tightly contested 1-1 draw through 90 minutes — Arjun Meena cancelling out Bikaner's opener just before the break — neither side could find the winner in extra time, forcing a penalty shootout.

Goalkeeper Karan Rathore was the hero, saving two spot-kicks to hand Kota FA a 4-2 shootout victory. The young keeper, who has been one of the standout performers of the academy's U-18 season, was mobbed by teammates after the decisive save.

Youth Development Coach Arjun Verma praised his side's mental strength: "We spoke in the dressing room about courage — not just physical courage but the mental courage to step up under pressure. Every single one of our penalty takers showed that today. I couldn't be prouder."

The semi-final draw will be announced by the Rajasthan Football Association later this week. Kota FA will face either Jaipur Youth or Jodhpur United for a place in the final.`,
    author: 'Kota FA Media Team',
    publishedAt: '2025-09-22',
    category: 'Match Report',
    imageUrl: '/SVG/shield-placeholder.svg',
    tags: ['U-18', 'State Championship', 'Match Report'],
  },
  {
    slug: 'open-trials-april-2026-announced',
    title: 'Open Trials for April 2026 Now Officially Open for Registration',
    excerpt:
      'Kota Football Academy has announced open trial dates for all three age groups in April and May 2026. Limited spots available.',
    content: `Kota Football Academy is pleased to announce the opening of registrations for our April and May 2026 open trials across all three competitive squads — Senior (18+), U-18, and U-12.

Trials will be held at the Main Academy Ground and Training Pitch B, Kota, and will be overseen by our full coaching staff including AFC B-licensed coaches Gurmail Singh and Nitin Jangra.

This season we are looking to add technically proficient, tactically aware, and physically prepared players to all three squads. Players of all backgrounds are encouraged to apply — we value character and work ethic as highly as raw ability.

What to bring: a valid birth certificate, medical clearance certificate, appropriate football boots, and plenty of enthusiasm.

To secure your spot, head to the Admissions section of our website and complete the online application form. Given the high volume of interest we receive, early applications are strongly recommended.`,
    author: 'Kota FA Admissions Team',
    publishedAt: '2025-09-01',
    category: 'Announcement',
    imageUrl: '/SVG/admissions-graphic.svg',
    tags: ['Trials', 'Admissions', 'Open Trials', 'All Age Groups'],
  },
  {
    slug: 'community-football-clinic-kota-2025',
    title: 'Academy Hosts Free Community Football Clinic for Local Schools',
    excerpt:
      'Over 120 children from six local schools participated in Kota FA\'s free community clinic, introducing the beautiful game to the next generation.',
    content: `On a bright Saturday morning, Kota Football Academy threw open the gates of the Academy Ground to welcome over 120 children from six local schools for a free community football clinic.

The event, now in its second year, is part of the academy's commitment to growing grassroots football in the Kota region. Children aged 6-14 participated in structured skill stations covering dribbling, passing, shooting, and small-sided games.

Coaches Nitin Jangra and Aman Kumar led sessions alongside a team of academy volunteers and senior players, who mentored the younger participants throughout the morning.

"Seeing the smiles on these children's faces is why we do what we do," said Nitin Jangra. "Football is for everyone, and events like this are how we grow the game at the grassroots level. Many of these kids could be in our junior academy in a few years."

Academy Director expressed his hope that the clinic would inspire some of the children to pursue the sport further, and confirmed that a free introductory session at the academy would be offered to all participants in the coming weeks.`,
    author: 'Kota FA Media Team',
    publishedAt: '2025-08-10',
    category: 'Event',
    imageUrl: '/SVG/training-graphic.svg',
    tags: ['Community', 'Grassroots', 'Youth Football', 'Event'],
  },
  {
    slug: 'new-gym-facility-inauguration',
    title: 'Academy Unveils State-of-the-Art Gymnasium and Recovery Suite',
    excerpt:
      'A major investment in player welfare sees Kota FA open a fully equipped gym and dedicated recovery facility at the academy premises.',
    content: `Kota Football Academy has officially opened a new state-of-the-art gymnasium and recovery suite, marking one of the most significant infrastructure investments in the club's history.

The facility, which has been developed over six months, features professional-grade strength and conditioning equipment, a dedicated stretching and mobility zone, an ice bath recovery station, and a video analysis room equipped with four large screens for tactical review sessions.

Fitness and Conditioning Expert Aman Kumar designed the layout and equipment selection to specifically meet the physical demands of football players across all age groups. "We now have a facility that matches what you'd find at professional clubs. Our players deserve the very best environment to develop in," Kumar explained.

The gym will be used for structured sessions as part of the weekly training schedule, with specific slots allocated to Senior, U-18, and U-12 squads. Medical staff will also be available on designated days for injury assessments and rehabilitation support.

The academy is currently accepting applications for the 2025-26 season. Players interested in training with these facilities are encouraged to apply via the Admissions page.`,
    author: 'Kota FA Media Team',
    publishedAt: '2025-07-05',
    category: 'Academy News',
    imageUrl: '/SVG/training-graphic.svg',
    tags: ['Facilities', 'Infrastructure', 'Academy News'],
  },
  {
    slug: 'deepak-chauhan-top-scorer-award',
    title: 'Deepak Chauhan Named Rajasthan State League Top Scorer',
    excerpt:
      'Prolific forward Deepak Chauhan collected the Golden Boot after finishing the season as the league\'s top scorer with 18 league goals.',
    content: `Kota FA's talismanic forward Deepak Chauhan has been awarded the Rajasthan State League Golden Boot after finishing the campaign as the division's top scorer with an impressive 18 league goals.

The 21-year-old, who joined the academy at the age of 16, has developed into one of the most feared forwards in Rajasthan football. His combination of explosive pace, clinical finishing, and intelligent movement makes him a constant threat to any defence.

At the season awards ceremony, Chauhan was visibly emotional as he accepted the award. "I remember being a young boy watching the senior players here and dreaming of moments like this. The academy gave me everything — the coaching, the belief, the environment to grow. This award belongs to everyone at Kota FA."

Head Coach Gurmail Singh has confirmed that the club has received enquiries from several regional league clubs regarding Deepak, though the academy remains committed to his continued development. "We'll always support what is best for the player. Right now, the best thing is for him to keep developing here," Singh stated.`,
    author: 'Kota FA Media Team',
    publishedAt: '2025-06-18',
    category: 'Player Spotlight',
    imageUrl: '/SVG/roster-illustration.svg',
    tags: ['Player Spotlight', 'Senior Team', 'Deepak Chauhan', 'Awards'],
  },
  {
    slug: 'afc-b-license-coaching-staff',
    title: 'Gurmail Singh and Nitin Jangra Complete UEFA B License Upgrade',
    excerpt:
      'Two of Kota FA\'s senior coaches have successfully completed their AFC B License programmes, further raising the academy\'s coaching standards.',
    content: `Kota Football Academy is delighted to confirm that Head Coach Gurmail Singh and Youth Development Coach Nitin Jangra have both successfully completed their AFC B License programmes, further strengthening the coaching credentials at the academy.

The qualification, awarded by the Asian Football Confederation, is a rigorous programme covering advanced tactical concepts, player development methodology, sports psychology, and performance analysis. Both coaches undertook the programme alongside their full-time responsibilities at the academy.

"Investing in our coaches is as important as investing in our players," said the Academy Director. "Having two AFC B-licensed coaches in charge of our senior and youth development programs gives every player the confidence that they are learning from some of the best-qualified coaches in the region."

Gurmail Singh expressed his gratitude for the academy's support during the qualification period: "It wasn't easy balancing the coursework with our full season, but the academy gave me every resource and flexibility I needed. I'm excited to bring new ideas and methods to our training programme."

The qualification elevates Kota FA's coaching credentials and reinforces the academy's commitment to providing a professional development pathway for every player.`,
    author: 'Kota FA Media Team',
    publishedAt: '2025-05-20',
    category: 'Academy News',
    imageUrl: '/SVG/admissions-graphic.svg',
    tags: ['Coaching', 'AFC License', 'Academy News'],
  },
  {
    slug: 'u12-cup-final-2025',
    title: 'U-12 Stars Reach Regional Cup Final in Breakthrough Season',
    excerpt:
      'The youngest competitive squad at Kota FA has defied expectations to reach the final of the Rajasthan U-12 Cup in their debut campaign.',
    content: `In what has been described as the most exciting development of Kota FA's current season, the U-12 squad has reached the final of the Rajasthan U-12 Cup — a remarkable achievement in their debut competitive campaign.

Led by talismanic forward Sanjay Kumar, who has scored an astonishing 10 goals in the competition, the young Kota FA side dispatched some of the region's most established junior academies to book their place in the showpiece final.

Youth Development Coach Nitin Jangra has guided the group with patience and a clear philosophy: "At this age, we focus on enjoyment and technical development above all else. But these kids have so much competitive spirit naturally — they just love to win, and they work hard for each other."

Captain Vijay Sharma, 12, was particularly impressive in the semi-final victory, controlling midfield and setting up two goals. His composure on the ball has drawn comparisons to players many years his senior.

The final will be played next month at a neutral venue, with the opposition yet to be confirmed by the Rajasthan Football Association.`,
    author: 'Kota FA Media Team',
    publishedAt: '2025-04-30',
    category: 'Match Report',
    imageUrl: '/SVG/shield-placeholder.svg',
    tags: ['U-12', 'Regional Cup', 'Match Report'],
  },
  {
    slug: 'summer-training-camp-2025',
    title: 'Kota FA Summer Intensive Camp: Applications Now Open',
    excerpt:
      'Our popular 2-week summer football camp returns with expanded capacity and new technical modules for players aged 8-21.',
    content: `Kota Football Academy is thrilled to announce the return of its highly popular Summer Intensive Football Camp, now expanded with additional capacity and new technical development modules for the 2025 edition.

Running over two weeks from July 14-27, the camp is open to players aged 8-21 and provides an immersive football education experience under the guidance of our AFC and AIFF-licensed coaching team.

This year's camp introduces three new modules: advanced goalkeeping technique (open to all GKs), an introduction to tactical positioning concepts, and a dedicated physical literacy programme for the youngest age groups. Players will receive individual feedback reports and a personal development roadmap at the end of the camp.

The camp is open to both existing academy players and new applicants. Spaces are limited to ensure each player receives quality coaching attention. Early registration is strongly advised — last year's camp sold out three weeks before the start date.

Full details, pricing, and the registration form are available on our Admissions page. For queries, contact the academy directly via the Contact page.`,
    author: 'Kota FA Admissions Team',
    publishedAt: '2025-04-05',
    category: 'Announcement',
    imageUrl: '/SVG/training-graphic.svg',
    tags: ['Summer Camp', 'Admissions', 'Training', 'All Age Groups'],
  },
];
