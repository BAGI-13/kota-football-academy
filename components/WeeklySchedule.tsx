'use client';

import { useState } from 'react';
import type { TrainingSession } from '@/lib/data/training';
import TrainingSessionCard from '@/components/TrainingSessionCard';

type TeamFilter = 'All' | 'Senior' | 'U-18' | 'U-12';

const DAYS: TrainingSession['day'][] = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
];

const DAY_SHORT: Record<TrainingSession['day'], string> = {
  Monday:    'MON',
  Tuesday:   'TUE',
  Wednesday: 'WED',
  Thursday:  'THU',
  Friday:    'FRI',
  Saturday:  'SAT',
  Sunday:    'SUN',
};

const TEAM_FILTERS: TeamFilter[] = ['All', 'Senior', 'U-18', 'U-12'];

export default function WeeklySchedule({ sessions }: { sessions: TrainingSession[] }) {
  const [activeTeam, setActiveTeam] = useState<TeamFilter>('All');

  const filtered = sessions.filter(
    (s) => activeTeam === 'All' || s.team === activeTeam || s.team === 'All',
  );

  const tabBase = 'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer';
  const tabActive   = 'bg-crimson text-white shadow-md';
  const tabInactive = 'bg-white text-charcoal border border-gray-200 hover:border-crimson hover:text-crimson';

  return (
    <div>
      {/* Team filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {TEAM_FILTERS.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTeam(t)}
            className={`${tabBase} ${activeTeam === t ? tabActive : tabInactive}`}
          >
            {t === 'All' ? 'All Teams' : t}
          </button>
        ))}
      </div>

      {/* ── DESKTOP: 7-column grid (md and above) ── */}
      <div className="hidden md:grid grid-cols-7 gap-2 items-start">
        {DAYS.map((day) => {
          const daySessions = filtered.filter((s) => s.day === day);
          return (
            <div key={day} className="flex flex-col">
              {/* Column header */}
              <div className="bg-charcoal text-white text-center py-2 rounded-t-lg text-xs font-black tracking-widest mb-2">
                {DAY_SHORT[day]}
              </div>
              {/* Session cards */}
              <div className="min-h-[60px]">
                {daySessions.length > 0 ? (
                  daySessions.map((s) => (
                    <TrainingSessionCard key={s.id} session={s} />
                  ))
                ) : (
                  <p className="text-center text-gray-300 text-xs pt-4">—</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── MOBILE: vertical list grouped by day ── */}
      <div className="flex flex-col gap-6 md:hidden">
        {DAYS.map((day) => {
          const daySessions = filtered.filter((s) => s.day === day);
          if (daySessions.length === 0) return null;
          return (
            <div key={day}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-1 bg-crimson rounded-full" />
                <h3 className="text-charcoal font-black text-base uppercase tracking-wide">{day}</h3>
              </div>
              <div className="flex flex-col gap-1">
                {daySessions.map((s) => (
                  <TrainingSessionCard key={s.id} session={s} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-8 justify-center text-xs">
        {[
          { label: 'Technical',          color: 'bg-crimson/20 border-crimson text-crimson' },
          { label: 'Tactical',           color: 'bg-charcoal/10 border-charcoal text-charcoal' },
          { label: 'Fitness',            color: 'bg-gray-100 border-gray-400 text-gray-600' },
          { label: 'Match Simulation',   color: 'bg-crimson/30 border-crimson-dark text-crimson-dark' },
          { label: 'Goalkeeper',         color: 'bg-charcoal/20 border-charcoal text-charcoal' },
        ].map((l) => (
          <span key={l.label} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${l.color} font-semibold`}>
            {l.label}
          </span>
        ))}
      </div>
    </div>
  );
}
