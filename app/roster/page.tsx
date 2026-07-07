// app/roster/page.tsx
import type { Metadata } from 'next';
import { players } from '@/lib/data/players';
import PageHero from '@/components/PageHero';
import RosterFilter from '@/components/RosterFilter';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Our Squad — Kota Football Academy',
  description:
    'Explore every player across the Senior, U-18, and U-12 squads at Kota Football Academy.',
};

export default function RosterPage() {
  return (
    <>
      <PageHero
        title="Our Squad"
        subtitle="Explore every player across all age groups."
        svgSrc="/SVG/roster-illustration.svg"
      />

      <div className="container mx-auto px-6 py-16">
        <RosterFilter players={players} />
      </div>

      <CTABanner
        heading="Think You Have What It Takes?"
        subtext="Trials are open year-round. Apply today and take the first step towards your football journey."
        buttonLabel="Apply for a Trial"
        buttonHref="/admissions"
      />
    </>
  );
}
