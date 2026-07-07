// app/roster/[id]/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';
import { players } from '@/lib/data/players';
import Badge from '@/components/ui/Badge';
import PlayerCard from '@/components/PlayerCard';

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return players.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const player = players.find((p) => p.id === id);
  if (!player) return { title: 'Player Not Found — Kota Football Academy' };
  return {
    title: `${player.name} — Kota Football Academy`,
    description: player.bio,
  };
}

export default async function PlayerDetailPage({ params }: Props) {
  const { id } = await params;
  const player = players.find((p) => p.id === id);
  if (!player) notFound();

  const relatedPlayers = players
    .filter((p) => p.team === player.team && p.id !== player.id)
    .slice(0, 3);

  const stats = [
    { label: 'Appearances', value: player.stats.appearances },
    { label: 'Goals',       value: player.stats.goals },
    { label: 'Assists',     value: player.stats.assists },
    ...(player.position === 'Goalkeeper' && player.stats.cleanSheets !== undefined
      ? [{ label: 'Clean Sheets', value: player.stats.cleanSheets }]
      : []),
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* ── Page container ── */}
      <div className="container mx-auto px-6 py-12 md:py-20">

        {/* Back link */}
        <Link
          href="/roster"
          className="inline-flex items-center gap-2 text-crimson font-semibold hover:underline mb-10"
        >
          <FaChevronLeft className="text-sm" />
          Back to Roster
        </Link>

        {/* ── 2-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* LEFT — Portrait + badges */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-charcoal-light shadow-xl">
              <Image
                src={player.imageUrl}
                alt={player.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>

            {/* Badges row */}
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge label={player.position} variant="crimson" />
              <Badge label={player.team}     variant="charcoal" />
              {player.isCaptain && <Badge label="Captain" variant="outline" />}
            </div>
          </div>

          {/* RIGHT — Info + stats */}
          <div className="relative w-full lg:w-2/3">

            {/* Decorative jersey number */}
            <p
              aria-hidden="true"
              className="absolute -top-4 right-0 text-crimson font-black leading-none select-none pointer-events-none"
              style={{ fontSize: '9rem', opacity: 0.08 }}
            >
              #{player.number}
            </p>

            {/* Name */}
            <h1 className="text-charcoal text-4xl md:text-5xl font-black leading-tight">
              {player.name}
            </h1>

            {/* Meta row */}
            <p className="text-gray-500 text-base mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>🌏 {player.nationality}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:inline-block" />
              <span>Age {player.age}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:inline-block" />
              <span className="text-crimson font-semibold">#{player.number}</span>
            </p>

            {/* Bio */}
            <p className="text-gray-600 text-lg leading-relaxed mt-5">{player.bio}</p>

            <hr className="border-gray-200 my-6" />

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-charcoal rounded-xl p-5 text-center">
                  <p className="text-crimson text-4xl font-black leading-none">{s.value}</p>
                  <p className="text-gray-400 text-sm mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Related players ── */}
        {relatedPlayers.length > 0 && (
          <section className="mt-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-1 bg-crimson rounded-full" />
              <h2 className="text-charcoal text-2xl md:text-3xl font-black">
                More from the {player.team} Squad
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {relatedPlayers.map((p) => (
                <PlayerCard key={p.id} player={p} />
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
