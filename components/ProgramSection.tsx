// components/ProgramSection.tsx
import React from 'react';
// Icons ko import kiya
import { FaChild } from 'react-icons/fa';
import { GiSoccerBall, GiGoalKeeper, GiTeamIdea } from 'react-icons/gi';
import { FaRunning } from 'react-icons/fa';
import { BsShieldFillCheck } from 'react-icons/bs';

// Card component ko update kiya
const ProgramCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode; // Icon ke liye prop
  title: string;
  description: string;
}) => (
  <div
    className="bg-white rounded-lg shadow-lg p-6 text-center 
               transition-all duration-300 ease-in-out 
               hover:shadow-xl hover:-translate-y-1" // Hover effect change kiya
  >
    {/* Icon */}
    <div className="flex justify-center mb-4">
      <span className="text-5xl text-orange-500">{icon}</span>
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

// Main Section component
const ProgramSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
          Our Programs
        </h2>

        {/* 6 cards ke liye grid update kiya */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProgramCard
            icon={<FaChild />}
            title="Youth Development (U-12)"
            description="Our foundational program focuses on fundamental skills, basic rules, teamwork, and fostering a genuine love for the game in a fun, supportive environment."
          />
          <ProgramCard
            icon={<GiSoccerBall />}
            title="Junior Academy (U-18)"
            description="For competitive players. This program involves advanced tactical training, positional awareness, and high-intensity fitness drills to prepare for professional trials."
          />
          <ProgramCard
            icon={<GiGoalKeeper />}
            title="Goalkeeper Elite Training"
            description="Specialized coaching for the most unique position. Covers handling, footwork, shot-stopping, distribution, and commanding the penalty area."
          />
          <ProgramCard
            icon={<GiTeamIdea />}
            title="Tactical Awareness"
            description="Understand the game beyond the ball. We teach formations, offensive plays, defensive structures, and how to read the opponent's strategy."
          />
          <ProgramCard
            icon={<FaRunning />}
            title="Fitness & Conditioning"
            description="Build the stamina and strength of a pro. Our drills focus on agility, speed, endurance, and injury prevention to keep players at peak performance."
          />
          <ProgramCard
            icon={<BsShieldFillCheck />}
            title="Defensive Masterclass"
            description="Learn the art of defending. This program covers 1-on-1 tackling, zonal marking, intercepting passes, and organizing the backline."
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;