// components/Header.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';

// ─── Type Definitions ────────────────────────────────────────────────────────
type NavLink = { href: string; label: string };
type NavGroup = { label: string; links: NavLink[] };
type NavItem = NavLink | NavGroup;

const isGroup = (item: NavItem): item is NavGroup => 'links' in item;

// ─── Desktop Nav Structure ───────────────────────────────────────────────────
const desktopNav: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    label: 'Club',
    links: [
      { href: '/teams', label: 'Teams' },
      { href: '/roster', label: 'Roster' },
      { href: '/fixtures', label: 'Fixtures' },
      { href: '/training', label: 'Training' },
    ],
  },
  {
    label: 'Media',
    links: [
      { href: '/gallery', label: 'Gallery' },
      { href: '/news', label: 'News' },
    ],
  },
  { href: '/admissions', label: 'Admissions' },
  { href: '/contact', label: 'Contact' },
];

// ─── Mobile Flat Link List ───────────────────────────────────────────────────
const mobileLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/teams', label: 'Teams' },
  { href: '/roster', label: 'Roster' },
  { href: '/fixtures', label: 'Fixtures' },
  { href: '/training', label: 'Training' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/news', label: 'News' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/contact', label: 'Contact' },
];

// ─── Component ───────────────────────────────────────────────────────────────
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const pathname = usePathname();

  // ── Scroll: auto-hide + glassmorphism trigger ──────────────────────────────
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

  // ── Close dropdown on outside click ───────────────────────────────────────
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('[data-nav-group]')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // ── Close dropdown on Escape key ──────────────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenDropdown(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // ── Close dropdown on route change ────────────────────────────────────────
  useEffect(() => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleDropdown = useCallback((label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }, []);

  const isLinkActive = (href: string) =>
    (href === '/' && pathname === '/') ||
    (href !== '/' && pathname.startsWith(href));

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-transform duration-300
                 ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                 ${isScrolled ? 'bg-white/95 md:bg-transparent' : 'bg-transparent'}
                `}
    >
      <nav
        className={`container mx-auto flex items-center justify-between p-6
                   transition-all duration-300 ease-in-out
                   ${isScrolled
                      ? 'md:mt-2 md:rounded-full md:bg-white/95 md:backdrop-blur-md md:shadow-xl'
                      : 'md:mt-0 md:rounded-none md:bg-transparent md:shadow-none'
                   }`}
      >
        {/* ── Logo ─────────────────────────────────────────────────────────── */}
        <div className="text-2xl font-bold flex-shrink-0">
          <Link href="/" className="hover:text-crimson transition-colors duration-200">
            Kota Football Academy
          </Link>
        </div>

        {/* ── Desktop Navigation ───────────────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-1">
          {desktopNav.map((item) => {
            if (!isGroup(item)) {
              // Flat link
              const active = isLinkActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                             ${active
                               ? 'text-crimson-dark font-bold'
                               : 'hover:text-crimson-dark hover:bg-crimson/5'
                             }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-crimson-dark rounded-full" />
                  )}
                </Link>
              );
            }

            // Dropdown group
            const isGroupActive = item.links.some((l) => isLinkActive(l.href));
            const isOpen = openDropdown === item.label;

            return (
              <div key={item.label} className="relative" data-nav-group>
                <button
                  onClick={() => toggleDropdown(item.label)}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium
                             transition-colors duration-200
                             ${isGroupActive
                               ? 'text-crimson-dark font-bold'
                               : 'hover:text-crimson-dark hover:bg-crimson/5'
                             }`}
                >
                  {item.label}
                  <FaChevronDown
                    className={`text-xs transition-transform duration-200
                               ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown panel */}
                {isOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2
                                  bg-white rounded-xl shadow-2xl border border-gray-100
                                  py-1.5 min-w-[160px] z-50">
                    {item.links.map((link) => {
                      const active = isLinkActive(link.href);
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-150
                                     ${active
                                       ? 'bg-crimson text-white'
                                       : 'text-charcoal hover:bg-crimson hover:text-white'
                                     }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Mobile Menu Button ───────────────────────────────────────────── */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-800 focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Dropdown ─────────────────────────────────────────── */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl z-40
                        border-t border-gray-100">
          <div className="flex flex-col py-4 px-6 gap-1">
            {mobileLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2.5 px-3 rounded-lg text-base font-medium transition-colors duration-150
                             ${active
                               ? 'text-crimson-dark font-bold bg-crimson/5'
                               : 'text-slate-700 hover:text-crimson-dark hover:bg-crimson/5'
                             }`}
                >
                  {link.label}
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
