// app/training/page.tsx
import type { Metadata } from 'next';
import { GiSoccerBall } from 'react-icons/gi';
import { FaBrain, FaRunning } from 'react-icons/fa';
import { trainingSessions } from '@/lib/data/training';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import WeeklySchedule from '@/components/WeeklySchedule';
import CoachesSection from '@/components/CoachesSection';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Training & Development — Kota Football Academy',
  description:
    'Explore our structured week-long training program for Senior, U-18, and U-12 squads at Kota Football Academy.',
};

const PHILOSOPHY_CARDS = [
  {
    icon: <GiSoccerBall className="text-5xl text-crimson mb-4" />,
    title: 'Technical Excellence',
    description:
      'Mastery of ball control, passing precision, and positional awareness forms the bedrock of every session we run.',
  },
  {
    icon: <FaBrain className="text-5xl text-crimson mb-4" />,
    title: 'Mental Fortitude',
    description:
      'Building resilient, tactically sharp players who can perform under pressure and make smart decisions at pace.',
  },
  {
    icon: <FaRunning className="text-5xl text-crimson mb-4" />,
    title: 'Peak Physical Conditioning',
    description:
      'Bespoke fitness programs designed to meet the specific physical demands of modern football at every age group.',
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        title="Training & Development"
        subtitle="Our structured week-long program for all age groups."
        svgSrc="/SVG/training-graphic.svg"
      />

      {/* ── Weekly Schedule ── */}
      <section className="container mx-auto px-6 py-16">
        <SectionHeader
          title="Weekly Training Schedule"
          subtitle="Filter by team to see your squad's weekly sessions."
          align="center"
        />
        <WeeklySchedule sessions={trainingSessions} />
      </section>

      {/* ── Training Philosophy ── */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Training Philosophy"
            subtitle="Three pillars that define how we develop every player at Kota Football Academy."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PHILOSOPHY_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center">{card.icon}</div>
                <h3 className="text-charcoal text-xl font-black mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coaching Staff ── */}
      <section className="container mx-auto px-6 pt-16">
        <SectionHeader
          title="The Coaching Team"
          subtitle="AFC and AIFF licensed coaches dedicated to your development."
          align="center"
        />
        <CoachesSection />
      </section>

      <CTABanner
        heading="Ready to Join a Session?"
        subtext="Apply now and start your journey with Kota Football Academy."
        buttonLabel="Apply for Trials"
        buttonHref="/admissions"
      />
    </>
  );
}
