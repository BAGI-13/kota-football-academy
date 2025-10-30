// app/teams/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Icons import kiye (FaTrophy yahan add kiya)
import { FaPlayCircle, FaShieldAlt, FaStar, FaTrophy } from 'react-icons/fa';

// Team Section Component (Reusable)
const TeamSection = ({
  title,
  ageGroup,
  description,
  imageUrl,
  focusPoints,
  imageLeft = false, // Alternate layout ke liye prop
}: {
  title: string;
  ageGroup: string;
  description: string;
  imageUrl: string;
  focusPoints: { icon: React.ReactNode; text: string }[];
  imageLeft?: boolean;
}) => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Image Column */}
    <div
      className={`relative w-full h-96 rounded-lg shadow-xl overflow-hidden ${
        imageLeft ? 'md:order-first' : 'md:order-last' // Order change karega
      }`}
    >
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="bg-gray-200"
      />
    </div>

    {/* Content Column */}
    <div className={`${imageLeft ? 'md:order-last' : 'md:order-first'}`}>
      <span className="text-orange-600 font-semibold">{ageGroup}</span>
      <h2 className="text-3xl font-bold text-slate-800 mb-4">{title}</h2>
      <p className="text-lg text-slate-600 mb-6">{description}</p>
      
      {/* Focus Points */}
      <div className="space-y-3">
        {focusPoints.map((point, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-xl text-orange-500">{point.icon}</span>
            <span className="text-slate-700 text-lg">{point.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function TeamsPage() {
  return (
    <div className="container mx-auto py-20 px-6">
      {/* --- Page Header --- */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Our Teams
        </h1>
        <p className="text-lg md:text-xl mt-4 text-slate-700 max-w-2xl mx-auto">
          We have dedicated programs for every age group, designed to develop
          players at each stage of their journey.
        </p>
      </div>

      {/* --- Sections Container --- */}
      <div className="space-y-20">
        {/* --- Senior Team --- */}
        <TeamSection
          title="Senior Team"
          ageGroup="Ages 18+"
          description="Our flagship team competes at the highest regional levels. This program is for elite players focusing on advanced tactics, peak physical conditioning, and professional pathways."
          imageUrl="/placeholder-team-1.jpg" // Note: Yeh image abhi nahi hai
          imageLeft={false}
          focusPoints={[
            { icon: <FaTrophy />, text: 'Competitive League Play' }, // Ab yeh kaam karega
            { icon: <FaShieldAlt />, text: 'Advanced Tactical Formations' },
            { icon: <FaStar />, text: 'Professional Scouting Exposure' },
          ]}
        />

        {/* --- Junior Academy (U-18) --- */}
        <TeamSection
          title="Junior Academy"
          ageGroup="Under-18 (U-18)"
          description="This is the bridge to our senior team. Players refine their positional skills, learn high-intensity drills, and are prepared for the physical demands of senior football."
          imageUrl="/placeholder-team-2.jpg" // Note: Yeh image abhi nahi hai
          imageLeft={true} // Image Left Layout
          focusPoints={[
            { icon: <FaPlayCircle />, text: 'Positional Specialization' },
            { icon: <FaShieldAlt />, text: 'High-Tempo Drills' },
            { icon: <FaStar />, text: 'Fitness & Strength Building' },
          ]}
        />

        {/* --- Youth Development (U-12) --- */}
        <TeamSection
          title="Youth Development"
          ageGroup="Under-12 (U-12)"
          description="The foundation of our academy. Young players learn the fundamentals of football, including dribbling, passing, and shooting, in a fun, positive, and encouraging environment."
          imageUrl="/placeholder-team-3.jpg" // Note: Yeh image abhi nahi hai
          imageLeft={false}
          focusPoints={[
            { icon: <FaPlayCircle />, text: 'Fundamental Skills' },
            { icon: <FaShieldAlt />, text: 'Introduction to Teamwork' },
            { icon: <FaStar />, text: 'Fun & Positive Coaching' },
          ]}
        />
      </div>

      {/* --- CTA Section --- */}
      <section className="text-center bg-white py-16 mt-20 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Ready to Join the Legacy?
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
          We have a place for every player who is passionate about the game.
          Contact us for trial dates and admission details.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold 
                     text-lg shadow-md hover:bg-orange-700 hover:scale-105 
                     transition-all duration-300 ease-in-out"
        >
          Contact Us Now
        </Link>
      </section>
    </div>
  );
}