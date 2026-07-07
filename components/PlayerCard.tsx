// components/PlayerCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Player } from '@/lib/data/players';

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <Link href={`/roster/${player.id}`} className="group block">
      <div
        className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-charcoal-light shadow-lg
                   transition-transform duration-300 ease-out group-hover:scale-[1.02]
                   group-hover:shadow-2xl"
      >
        {/* Player image */}
        <Image
          src={player.imageUrl}
          alt={player.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />

        {/* Captain badge */}
        {player.isCaptain && (
          <div
            className="absolute top-3 right-3 w-8 h-8 bg-crimson rounded-full
                       flex items-center justify-center text-white text-xs font-black shadow-lg"
          >
            C
          </div>
        )}

        {/* Info overlay — bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-crimson font-black text-3xl leading-none">#{player.number}</p>
          <p className="text-white font-bold text-lg leading-tight mt-1">{player.name}</p>
          <p className="text-crimson/80 text-sm font-medium">{player.position}</p>
        </div>
      </div>
    </Link>
  );
}
