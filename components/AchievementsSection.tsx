// components/AchievementsSection.tsx
"use client"; // Hooks use karne ke liye zaroori hai

import React from 'react';
import CountUp from 'react-countup'; // Number animation
import { useInView } from 'react-intersection-observer'; // Scroll detection
import { GiTrophyCup, GiSoccerBall } from 'react-icons/gi';
import { FaUserGraduate } from 'react-icons/fa';

// Single Stat Item Component
const StatItem = ({
  icon,
  end,
  label,
}: {
  icon: React.ReactNode;
  end: number;
  label: string;
}) => {
  // Yeh trigger karega jab component view mein aayega
  const { ref, inView } = useInView({
    triggerOnce: true, // Sirf ek baar animate ho
    threshold: 0.5, // Jab 50% dikhe
  });

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-6xl text-orange-500 mb-3">{icon}</div>
      <span className="text-5xl font-bold">
        {/* Jab 'inView' true hoga, tabhi CountUp start hoga */}
        {inView ? <CountUp end={end} duration={3} /> : '0'}
        <span className="text-orange-500">+</span>
      </span>
      <span className="text-lg mt-2">{label}</span>
    </div>
  );
};

// Main Section Component
const AchievementsSection = () => {
  return (
    // Dark background (bg-slate-900) taaki yeh section alag se highlight ho
    <section className="w-full bg-slate-900 text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Our Track Record of Success
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
          <StatItem
            icon={<GiTrophyCup />}
            end={12}
            label="Regional Trophies Won"
          />
          <StatItem
            icon={<FaUserGraduate />}
            end={35}
            label="Players Sent to State-Level"
          />
          <StatItem
            icon={<GiSoccerBall />}
            end={5}
            label="Players Signed Professionally"
          />
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;