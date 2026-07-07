// components/TrainingSessionCard.tsx
import { FaClock } from 'react-icons/fa';
import type { TrainingSession } from '@/lib/data/training';
import { sessionTypeColors } from '@/lib/data/training';

export default function TrainingSessionCard({ session }: { session: TrainingSession }) {
  const colorClass = sessionTypeColors[session.type];

  return (
    <div
      title={session.notes}
      className={`rounded-lg border-l-4 p-3 mb-2 cursor-default text-xs md:text-sm ${colorClass}`}
    >
      {/* Title */}
      <p className="font-bold text-charcoal truncate leading-tight">{session.title}</p>

      {/* Coach */}
      <p className="text-gray-500 text-xs mt-0.5 truncate">{session.coach}</p>

      {/* Time row + team badge */}
      <div className="flex items-center justify-between gap-1 mt-2 flex-wrap">
        <span className="flex items-center gap-1 text-xs text-gray-600">
          <FaClock className="text-crimson text-xs flex-shrink-0" />
          {session.startTime}–{session.endTime}
        </span>
        {session.team !== 'All' && (
          <span className="text-[10px] bg-charcoal text-white px-1.5 py-0.5 rounded font-semibold">
            {session.team}
          </span>
        )}
        {session.team === 'All' && (
          <span className="text-[10px] bg-crimson text-white px-1.5 py-0.5 rounded font-semibold">
            All Teams
          </span>
        )}
      </div>
    </div>
  );
}
