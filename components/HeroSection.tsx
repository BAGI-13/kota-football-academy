// components/HeroSection.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-charcoal">

      {/* ── Decorative diagonal crimson accent stripe ─────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -right-24 top-0 w-[700px] h-full
                     bg-crimson opacity-[0.07] skew-x-[-12deg] transform-gpu"
        />
      </div>

      {/* ── SVG illustration (desktop only, right half) ───────────────────── */}
      <div
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2
                   w-[46%] pointer-events-none select-none opacity-25"
        aria-hidden="true"
      >
        <Image
          src="/SVG/hero-ball-graphic.svg"
          alt=""
          width={600}
          height={500}
          priority
        />
      </div>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center lg:text-left">

        {/* Crimson accent bar */}
        <div
          className="w-16 h-1 bg-crimson rounded-full mb-8 mx-auto lg:mx-0"
          aria-hidden="true"
        />

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white
                       tracking-tight leading-tight max-w-3xl mx-auto lg:mx-0">
          Kota Football
          <br className="hidden sm:block" />
          <span className="text-crimson"> Academy</span>
        </h1>

        {/* Tagline */}
        <p className="text-gray-300 text-xl md:text-2xl mt-6 mb-10
                      max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Nurturing the next generation of football stars in Gurugram.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center
                        lg:justify-start gap-4">
          {/* Primary */}
          <Link
            href="/admissions"
            className="inline-block px-8 py-4 bg-crimson hover:bg-crimson-dark
                       text-white rounded-xl font-bold text-lg shadow-xl
                       transition-all duration-300 ease-in-out hover:scale-105
                       w-full sm:w-auto text-center"
          >
            Join the Academy
          </Link>
          {/* Secondary — outline */}
          <Link
            href="/gallery"
            className="inline-block px-8 py-4 border-2 border-white text-white
                       rounded-xl font-bold text-lg
                       hover:bg-white hover:text-charcoal
                       transition-all duration-300 ease-in-out hover:scale-105
                       w-full sm:w-auto text-center"
          >
            View Highlights
          </Link>
        </div>

      </div>

      {/* ── Scroll-down chevron ────────────────────────────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <FaChevronDown className="text-white/40 text-2xl" />
      </div>

    </section>
  );
};

export default HeroSection;
