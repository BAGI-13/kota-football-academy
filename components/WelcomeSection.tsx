// components/WelcomeSection.tsx
import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="container mx-auto px-6 pb-20">
      <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">
        Welcome to the Academy
      </h2>
      <p className="text-lg text-slate-700 max-w-3xl mx-auto text-center">
        We are a premier institution in Kota dedicated to developing young
        talent. Our state-of-the-art facilities and expert coaches provide the
        perfect environment for players to grow, learn, and excel in the
        world of football.
      </p>
    </section>
  );
};

export default WelcomeSection;