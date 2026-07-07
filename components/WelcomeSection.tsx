// components/WelcomeSection.tsx
import React from 'react';

const stats = [
  'Founded 2020',
  '3 AFC Licensed Coaches',
  '35+ State-Level Players',
];

const WelcomeSection = () => {
  return (
    <section className="container mx-auto px-6 pt-8 pb-20">

      {/* Crimson accent bar */}
      <div className="w-16 h-1 bg-crimson rounded-full mx-auto mb-4" aria-hidden="true" />

      <h2 className="text-3xl font-bold text-center mb-6 text-charcoal">
        Welcome to the Academy
      </h2>

      <p className="text-lg text-slate-700 max-w-3xl mx-auto text-center">
        We are a premier institution in Kota dedicated to developing young
        talent. Our state-of-the-art facilities and expert coaches provide the
        perfect environment for players to grow, learn, and excel in the
        world of football.
      </p>

      {/* Stat pills */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {stats.map((stat) => (
          <span
            key={stat}
            className="inline-block px-5 py-2 bg-crimson/10 text-crimson
                       border border-crimson/20 rounded-full text-sm font-semibold"
          >
            {stat}
          </span>
        ))}
      </div>

    </section>
  );
};

export default WelcomeSection;
