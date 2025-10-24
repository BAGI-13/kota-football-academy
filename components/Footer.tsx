// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white p-6 text-center mt-12">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Kota Football Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;