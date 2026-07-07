'use client';

import { useState } from 'react';
import type { Match } from '@/lib/data/fixtures';
import MatchCard from '@/components/MatchCard';

type TeamFilter = 'All Teams' | 'Senior' | 'U-18' | 'U-12';
type ViewTab    = 'upcoming' | 'results';

const TEAM_TABS: TeamFilter[] = ['All Teams', 'Senior', 'U-18', 'U-12'];

export default function FixturesTabs({ matches }: { matches: Match[] }) {
  const [activeView, setActiveView]   = useState<ViewTab>('upcoming');
  const [activeTeam, setActiveTeam]   = useState<TeamFilter>('All Teams');

  const baseFiltered = matches.filter((m) => {
    const viewMatch = activeView === 'upcoming' ? m.isUpcoming : !m.isUpcoming;
    const teamMatch = activeTeam === 'All Teams' || m.team === activeTeam;
    return viewMatch && teamMatch;
  });

  const sorted =
    activeView === 'upcoming'
      ? [...baseFiltered].sort((a, b) => a.date.localeCompare(b.date))
      : [...baseFiltered].sort((a, b) => b.date.localeCompare(a.date));

  const tabBase = 'px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer';
  const tabActive   = 'bg-crimson text-white shadow-md';
  const tabInactive = 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-white';

  return (
    <div>
      {/* ── Team filter sub-tabs ── */}
      <div className="flex flex-wrap gap-2 mb-4">
        {TEAM_TABS.map((team) => (
          <button
            key={team}
            onClick={() => setActiveTeam(team)}
            className={`${tabBase} ${activeTeam === team ? tabActive : tabInactive}`}
          >
            {team}
          </button>
        ))}
      </div>

      {/* ── Upcoming / Results primary tabs ── */}
      <div className="flex gap-2 mb-8">
        {(['upcoming', 'results'] as ViewTab[]).map((view) => (
          <button
            key={view}
            onClick={() => setActiveView(view)}
            className={`${tabBase} capitalize ${activeView === view ? tabActive : tabInactive}`}
          >
            {view === 'upcoming' ? 'Upcoming Fixtures' : 'Results'}
          </button>
        ))}
      </div>

      {/* ── Match list ── */}
      {sorted.length > 0 ? (
        <div className="flex flex-col gap-3">
          {sorted.map((match) => (
            <MatchCard key={match.id} match={match} variant={activeView === 'upcoming' ? 'upcoming' : 'result'} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-16">
          <p className="text-gray-400 text-lg font-medium">No matches found for this selection.</p>
        </div>
      )}
    </div>
  );
}
