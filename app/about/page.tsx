// app/about/page.tsx
import React from 'react';
import Image from 'next/image';
// Naye icons import kiye
import { FaShieldAlt, FaUsers, FaTrophy, FaBullseye, FaEye } from 'react-icons/fa';
// Coaches component ko reuse ke liye import kiya
import CoachesSection from '@/components/CoachesSection';

// Value Card Component
const ValueCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  // Card ka style badal diya (backdrop-blur)
  <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center">
    <div className="flex justify-center mb-4">
      <span className="text-4xl text-orange-500">{icon}</span>
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

export default function AboutPage() {
  return (
    // py-12 ko 20 kar diya taaki upar se thoda aur space mile
    <div className="container mx-auto py-20 px-6">
      {/* --- Page Header --- */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          About Kota Football Academy
        </h1>
        <p className="text-lg md:text-xl mt-4 text-slate-700 max-w-2xl mx-auto">
          We are dedicated to nurturing young talent and fostering a deep passion
          for football in Kota.
        </p>
      </div>

      {/* --- Our Story (Image + Text) --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        {/* Image Column */}
        <div className="relative w-full h-96 rounded-lg shadow-xl overflow-hidden">
          <Image
            src="/placeholder-about-1.jpg" // Note: Yeh image abhi nahi hai
            alt="Academy Team"
            layout="fill"
            objectFit="cover"
            className="bg-gray-200"
          />
        </div>
        {/* Text Column */}
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Story</h2>
          <p className="text-lg text-slate-600 mb-4">
            Founded in 2020, Kota Football Academy was born from a simple
            desire: to give the talented youth of Kota a professional platform
            to grow. We saw immense potential in our city and built an academy
            that provides world-class coaching and facilities.
          </p>
          <p className="text-lg text-slate-600">
            Today, we are proud to be a leading name in regional football,
            known for developing skilled, disciplined, and smart players who
            excel both on and off the field.
          </p>
        </div>
      </section>

      {/* --- Mission & Vision (Naya Layout) --- */}
      <section className="space-y-16 mb-20">
        {/* Mission (Text Left, Image Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl text-orange-500">
                <FaBullseye />
              </span>
              <h2 className="text-3xl font-bold text-slate-800">Our Mission</h2>
            </div>
            <p className="text-lg text-slate-600">
              To provide a safe, positive, and professional environment for
              aspiring footballers to develop their technical skills, tactical
              understanding, and physical fitness, enabling them to reach their
              highest potential.
            </p>
          </div>
          <div className="relative w-full h-80 rounded-lg shadow-xl overflow-hidden">
            <Image
              src="/placeholder-about-2.jpg" // Note: Yeh image abhi nahi hai
              alt="Our Mission"
              layout="fill"
              objectFit="cover"
              className="bg-gray-200"
            />
          </div>
        </div>

        {/* Vision (Image Left, Text Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-80 rounded-lg shadow-xl overflow-hidden md:order-last">
            <Image
              src="/placeholder-about-3.jpg" // Note: Yeh image abhi nahi hai
              alt="Our Vision"
              layout="fill"
              objectFit="cover"
              className="bg-gray-200"
            />
          </div>
          <div className="md:order-first">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl text-orange-500">
                <FaEye />
              </span>
              <h2 className="text-3xl font-bold text-slate-800">Our Vision</h2>
            </div>
            <p className="text-lg text-slate-600">
              To be recognized as the premier football academy in Rajasthan,
              consistently producing players for state and national level teams,
              and fostering a vibrant football community in Kota.
            </p>
          </div>
        </div>
      </section>

      {/* --- Core Values (Naya Card Style) --- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<FaShieldAlt />}
              title="Discipline"
              description="Success is built on routine. We instill a strong sense of personal discipline and responsibility."
            />
            <ValueCard
              icon={<FaUsers />}
              title="Teamwork"
              description="No individual is greater than the team. We promote unity, respect, and collaboration."
            />
            <ValueCard
              icon={<FaTrophy />}
              title="Excellence"
              description="Striving for greatness in every training session, every match, and every action."
            />
          </div>
        </div>
      </section>

      {/* --- Coaches Section (Reuse) --- */}
      {/* Hum homepage wala component yahan reuse kar rahe hain */}
      <CoachesSection />
    </div>
  );
}