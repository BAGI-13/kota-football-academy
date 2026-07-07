// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import { siteConfig } from '@/lib/siteConfig';

const PHONE        = siteConfig.phone;
const EMAIL        = siteConfig.email;
const ADDRESS_LINE1 = siteConfig.address.line1;
const ADDRESS_LINE2 = siteConfig.address.line2;

const socialLinks = [
  { icon: <FaInstagram />, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: <FaFacebook />,  href: siteConfig.social.facebook,  label: 'Facebook'  },
  { icon: <FaYoutube />,   href: siteConfig.social.youtube,   label: 'YouTube'   },
  { icon: <FaTwitter />,   href: siteConfig.social.twitter,   label: 'Twitter'   },
];

const quickLinks = [
  { href: '/',         label: 'Home'         },
  { href: '/about',    label: 'About Us'     },
  { href: '/teams',    label: 'Our Teams'    },
  { href: '/roster',   label: 'Squad Roster' },
];

const exploreLinks = [
  { href: '/fixtures',   label: 'Fixtures & Results'  },
  { href: '/training',   label: 'Training Schedule'   },
  { href: '/gallery',    label: 'Media Gallery'        },
  { href: '/news',       label: 'News & Updates'       },
  { href: '/admissions', label: 'Join the Academy'     },
];

// ─── Shared column heading style ──────────────────────────────────────────────
const ColHeading = ({ children }: { children: React.ReactNode }) => (
  <p className="text-crimson font-bold text-xs uppercase tracking-widest mb-5">
    {children}
  </p>
);

// ─── Component ────────────────────────────────────────────────────────────────
const Footer = () => {
  return (
    <footer className="w-full bg-charcoal text-white">
      <div className="container mx-auto px-6 pt-16 pb-10">

        {/* ── 4-Column Grid ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand + Social */}
          <div>
            <p className="text-xl font-black text-white mb-2">
              Kota Football Academy
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-[220px]">
              Nurturing the next generation of football stars in Gurugram.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-crimson text-xl transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <ColHeading>Quick Links</ColHeading>
            <ul className="space-y-1">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block text-gray-400 hover:text-white text-sm py-1
                               transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Explore */}
          <div>
            <ColHeading>Explore</ColHeading>
            <ul className="space-y-1">
              {exploreLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block text-gray-400 hover:text-white text-sm py-1
                               transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Info */}
          <div>
            <ColHeading>Contact</ColHeading>
            <div className="space-y-3">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white
                           text-sm transition-colors duration-200"
              >
                <FaPhone className="text-crimson flex-shrink-0" />
                <span>{PHONE}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white
                           text-sm transition-colors duration-200"
              >
                <FaEnvelope className="text-crimson flex-shrink-0" />
                <span>{EMAIL}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-crimson flex-shrink-0 mt-0.5" />
                <span>
                  {ADDRESS_LINE1}
                  <br />
                  {ADDRESS_LINE2}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ─────────────────────────────────────────────────── */}
        <div className="border-t border-charcoal-light mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Kota Football Academy. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
