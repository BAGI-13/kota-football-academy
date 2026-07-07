'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import PlayerCard from '@/components/PlayerCard';
import type { Player } from '@/lib/data/players';

const TABS = ['All', 'Senior', 'U-18', 'U-12', 'Goalkeepers', 'Defenders', 'Midfielders', 'Forwards'] as const;

const POSITION_MAP: Record<string, Player['position']> = {
  Goalkeepers: 'Goalkeeper',
  Defenders:   'Defender',
  Midfielders: 'Midfielder',
  Forwards:    'Forward',
};

export default function RosterFilter({ players }: { players: Player[] }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = players.filter((p) => {
    if (activeFilter === 'All') return true;
    if (['Senior', 'U-18', 'U-12'].includes(activeFilter)) return p.team === activeFilter;
    return p.position === POSITION_MAP[activeFilter];
  });

  const featured = players.find((p) => p.isFeatured);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer
              ${activeFilter === tab
                ? 'bg-crimson text-white shadow-md'
                : 'bg-white text-charcoal border border-gray-200 hover:border-crimson hover:text-crimson'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Featured spotlight card — shown only on "All" filter */}
      {activeFilter === 'All' && featured && (
        <div className="mb-8">
          <Link
            href={`/roster/${featured.id}`}
            className="group relative flex flex-col md:flex-row overflow-hidden rounded-2xl bg-charcoal
                       shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full md:w-56 aspect-[2/1] md:aspect-auto flex-shrink-0">
              <Image
                src={featured.imageUrl}
                alt={featured.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 224px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal md:to-charcoal/60" />
            </div>

            {/* Info */}
            <div className="relative z-10 flex flex-col justify-center p-6 md:p-10">
              <span className="text-xs font-black uppercase tracking-widest text-crimson mb-2">
                ★ Featured Player
              </span>
              <p className="text-crimson font-black text-5xl leading-none mb-1">#{featured.number}</p>
              <h3 className="text-white font-black text-3xl md:text-4xl leading-tight">
                {featured.name}
                {featured.isCaptain && (
                  <span className="ml-3 inline-block bg-crimson text-white text-xs font-black px-2 py-0.5 rounded-full align-middle">
                    CAPTAIN
                  </span>
                )}
              </h3>
              <p className="text-gray-400 text-base mt-1 mb-4">
                {featured.position} · {featured.team} · Age {featured.age}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xl line-clamp-2">{featured.bio}</p>

              {/* Mini stats */}
              <div className="flex gap-6 mt-6">
                {[
                  { label: 'Apps', value: featured.stats.appearances },
                  { label: 'Goals', value: featured.stats.goals },
                  { label: 'Assists', value: featured.stats.assists },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-crimson font-black text-2xl leading-none">{s.value}</p>
                    <p className="text-gray-400 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Player grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
          {filtered.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
          <FaSearch className="text-crimson text-4xl opacity-60" />
          <p className="text-gray-500 text-lg font-medium">No players found for this filter.</p>
        </div>
      )}
    </div>
  );
}
