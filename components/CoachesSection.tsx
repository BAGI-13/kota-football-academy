// components/CoachesSection.tsx
import React from 'react';
import Image from 'next/image';

// --- CoachCard ko poora badal diya ---
const CoachCard = ({
  name,
  title,
  imageUrl,
}: {
  name: string;
  title: string;
  imageUrl: string;
}) => (
  // 'bg-white' card hata diya. Ab yeh seedha gradient par dikhega.
  <div className="flex flex-col items-center text-center">
    {/* Image ko circular (gol) banaya */}
    <div
      className="relative w-48 h-48 rounded-full overflow-hidden 
                 shadow-lg transition-all duration-300 
                 hover:shadow-xl hover:scale-105"
    >
      <Image
        src={imageUrl}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="grayscale hover:grayscale-0 transition-all duration-300" // Hover par color effect
      />
    </div>
    <div className="mt-4">
      <h3 className="text-xl font-bold text-slate-800">{name}</h3>
      <p className="text-orange-600 font-semibold">{title}</p>
    </div>
  </div>
);

// Main Section component
const CoachesSection = () => {
  return (
    // Note: Ismein 'bg-white' nahi hai, yeh gradient use karega
    <section className="w-full py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">
          Meet Our Expert Coaches
        </h2>

        {/* Coaches Grid (spacing badha di hai) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
          {/* Hum abhi placeholder images use kar rahe hain */}
          <CoachCard
            name="Rohan Sharma"
            title="Head Coach (UEFA A License)"
            imageUrl="/placeholder-coach-1.jpg" // Note: Yeh image abhi nahi hai
          />
          <CoachCard
            name="Vikram Singh"
            title="Youth Development (AFC B License)"
            imageUrl="/placeholder-coach-2.jpg"
          />
          <CoachCard
            name="Anjali Mehta"
            title="Fitness & Conditioning Expert"
            imageUrl="/placeholder-coach-3.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;