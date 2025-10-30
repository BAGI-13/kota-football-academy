// components/Header.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/teams', label: 'Teams' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (isMenuOpen) {
        setIsVisible(true);
        return;
      }
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  const pathname = usePathname();

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-transform duration-300
                 ${isVisible ? 'translate-y-0' : '-translate-y-full'}

                 ${/* --- YAHAN CHANGE HUA HAI --- */ ''}
                 ${isScrolled
                    ? 'bg-gradient-to-r from-white via-orange-100 to-orange-200 md:bg-transparent md:bg-none' // <-- md:bg-none ADD KIYA
                    : 'bg-transparent'
                 }
                `}
    >
      <nav
        className={`container mx-auto flex items-center justify-between p-6
                   transition-all duration-300 ease-in-out
                   ${isScrolled
                      ? 'md:mt-2 md:rounded-full md:bg-gradient-to-r md:from-white md:via-orange-100 md:to-orange-200 md:shadow-xl'
                      : 'md:mt-0 md:rounded-none md:bg-transparent md:shadow-none'
                   }
                  `}
      >
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Kota Football Academy</Link>
        </div>

        {/* --- Desktop Navigation Links (No Change) --- */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            const isActive =
              (link.href === '/' && pathname === '/') ||
              (link.href !== '/' && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors
                           ${
                             isActive
                               ? 'text-orange-700 font-bold'
                               : 'hover:text-orange-700'
                           }
                          `}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-orange-700" />
                )}
              </Link>
            );
          })}
        </div>

        {/* --- Mobile Menu Button (No Change) --- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
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
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-20">
          <div className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => {
              const isActive =
                (link.href === '/' && pathname === '/') ||
                (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative text-lg transition-colors
                             ${
                               isActive
                                 ? 'text-orange-700 font-bold'
                                 : 'hover:text-orange-700'
                             }
                            `}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-orange-700" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;