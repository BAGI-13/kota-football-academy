// lib/siteConfig.ts

export const siteConfig = {
  name: 'Kota Football Academy',
  shortName: 'Kota FA',
  tagline: 'Nurturing the next generation of football stars.',
  description:
    'Official website of the Kota Football Academy — professional football training for all age groups in Gurugram.',
  phone: '+91 7042605095',
  email: 'info@kotafootball.com',
  address: {
    line1: 'Academy Ground, GGN',
    line2: 'Gurugram, Haryana 122001',
  },
  formspreeIds: {
    contact:    'mwprjwkr',
    admissions: '',          // TODO: Replace with your Formspree admissions form ID
  },
  social: {
    instagram: '#',          // Replace with real URLs when available
    facebook:  '#',
    youtube:   '#',
    twitter:   '#',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112349.80000331002!2d76.95304918712175!3d28.423160295629007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1730320645063!5m2!1sen!2sin',
} as const;
