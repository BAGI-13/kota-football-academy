// components/Header.tsx
"use client"; // State use karne ke liye zaroori hai

import React, { useState } from 'react'; // useState ko import kiya
import Link from 'next/link';

const Header = () => {
  // Menu ke state ko track karne ke liye
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // 'relative' add kiya taaki mobile menu ko position kar sakein
    <header className="w-full relative">
      <nav className="container mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Kota Football Academy</Link>
        </div>

        {/* --- Desktop Navigation Links --- */}
        {/* 'hidden' (mobile par) aur 'md:flex' (tablet/pc par) add kiya */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-orange-700 transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-orange-700 transition-colors"
          >
            About
          </Link>
          <Link
            href="/teams"
            className="hover:text-orange-700 transition-colors"
          >
            Teams
          </Link>
          <Link
            href="/contact"
            className="hover:text-orange-700 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* --- Mobile Menu Button (Hamburger) --- */}
        {/* 'md:hidden' add kiya taaki yeh sirf mobile par dikhe */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} // State toggle karega
            className="text-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Close Icon (X)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu (Dropdown) --- */}
      {/* Yeh tabhi dikhega jab isMenuOpen === true hoga */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-20"
        >
          {/* Mobile links (vertical) */}
          <div className="flex flex-col items-center gap-4 py-6">
            <Link
              href="/"
              className="hover:text-orange-700 transition-colors"
              onClick={() => setIsMenuOpen(false)} // Link click par menu band
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-orange-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/teams"
              className="hover:text-orange-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Teams
            </Link>
            <Link
              href="/contact"
              className="hover:text-orange-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;