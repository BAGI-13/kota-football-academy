// components/HeroSection.tsx
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="container mx-auto text-center py-20 md:py-32">
      <div className="p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
          Kota Football Academy
        </h1>
        <p className="text-lg md:text-2xl mt-4 mb-8 text-slate-700">
          Nurturing the next generation of football stars.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold 
                     text-lg shadow-md hover:bg-orange-700 hover:scale-105 
                     transition-all duration-300 ease-in-out"
        >
          Join Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;