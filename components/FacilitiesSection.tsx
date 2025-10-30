// components/FacilitiesSection.tsx
import React from 'react';
import Image from 'next/image'; // Image component ko import kiya
import { GiSoccerField } from 'react-icons/gi';
import { FaBriefcaseMedical, FaLightbulb } from 'react-icons/fa';

// Main Section component
const FacilitiesSection = () => {
  return (
    // 'bg-white' use kiya taaki Coaches section (gradient) se alag dikhe
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">
          Our World-Class Facilities
        </h2>

        {/* Facilities ki list, vertical spacing ke saath */}
        <div className="space-y-16">
          {/* --- Facility 1: Grass Pitch (Image Left) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Column (Mobile par pehle, Desktop par bhi pehle) */}
            <div className="relative w-full h-72 rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/placeholder-facility-1.jpg" // Note: Yeh image abhi nahi hai
                alt="Full-Size Grass Pitch"
                layout="fill"
                objectFit="cover"
                className="bg-gray-200" // Placeholder color
              />
            </div>
            {/* Content Column */}
            <div className="p-4">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl text-orange-500">
                  <GiSoccerField />
                </span>
                <h3 className="text-2xl font-bold text-slate-800">
                  Full-Size Grass Pitch
                </h3>
              </div>
              <p className="text-slate-600 text-lg">
                A professionally maintained natural grass field, perfect for
                real-match simulations and tactical training. Our pitch meets
                professional standards to give players a real-game feel.
              </p>
            </div>
          </div>

          {/* --- Facility 2: Floodlit Area (Image Right) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Column (Mobile par pehle, Desktop par Aakhir mein) */}
            <div className="relative w-full h-72 rounded-lg shadow-lg overflow-hidden md:order-last">
              <Image
                src="/placeholder-facility-2.jpg" // Note: Yeh image abhi nahi hai
                alt="Floodlit Training Area"
                layout="fill"
                objectFit="cover"
                className="bg-gray-200"
              />
            </div>
            {/* Content Column (Mobile par baad mein, Desktop par Pehle) */}
            <div className="p-4 md:order-first">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl text-orange-500">
                  <FaLightbulb />
                </span>
                <h3 className="text-2xl font-bold text-slate-800">
                  Floodlit Training Area
                </h3>
              </div>
              <p className="text-slate-600 text-lg">
                Our training grounds are equipped with bright, high-power
                floodlights, allowing for flexible and effective practice
                schedules, day or night, regardless of the season.
              </p>
            </div>
          </div>

          {/* --- Facility 3: Physio Room (Image Left) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Column (Mobile par pehle, Desktop par bhi pehle) */}
            <div className="relative w-full h-72 rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/placeholder-facility-3.jpg" // Note: Yeh image abhi nahi hai
                alt="Physiotherapy Room"
                layout="fill"
                objectFit="cover"
                className="bg-gray-200"
              />
            </div>
            {/* Content Column */}
            <div className="p-4">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl text-orange-500">
                  <FaBriefcaseMedical />
                </span>
                <h3 className="text-2xl font-bold text-slate-800">
                  Physiotherapy Room
                </h3>
              </div>
              <p className="text-slate-600 text-lg">
                Equipped with first-aid and modern rehab tools. Our on-site
                medical staff ensures player safety, rapid injury assessment,
                and quick recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;