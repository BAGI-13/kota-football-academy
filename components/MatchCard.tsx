// components/MatchCard.tsx
import type { Match } from '@/lib/data/fixtures';

const MONTH_NAMES = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

function parseDate(iso: string) {
  const [, monthStr, dayStr] = iso.split('-');
  return {
    day: dayStr,
    month: MONTH_NAMES[parseInt(monthStr, 10) - 1],
  };
}

function getResultMeta(match: Match): {
  borderClass: string;
  label: string;
  labelColor: string;
} {
  if (!match.result) return { borderClass: '', label: '', labelColor: '' };
  const { kotaScore, opponentScore } = match.result;
  if (kotaScore > opponentScore)
    return { borderClass: 'border-l-4 border-crimson', label: 'WIN',  labelColor: 'text-crimson' };
  if (kotaScore === opponentScore)
    return { borderClass: 'border-l-4 border-charcoal', label: 'DRAW', labelColor: 'text-charcoal' };
  return { borderClass: 'border-l-4 border-gray-300',   label: 'LOSS', labelColor: 'text-gray-400' };
}

type Props = { match: Match; variant: 'upcoming' | 'result' };

export default function MatchCard({ match, variant }: Props) {
  const { day, month } = parseDate(match.date);
  const { borderClass, label, labelColor } = getResultMeta(match);

  return (
    <div
      className={`bg-white rounded-2xl shadow-md p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4
                  hover:shadow-xl transition-shadow duration-200
                  ${variant === 'result' ? borderClass : ''}`}
    >
      {/* LEFT — Date block */}
      <div className="flex flex-col items-center justify-center bg-charcoal text-white w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex-shrink-0">
        <span className="text-xl sm:text-2xl font-black leading-none">{day}</span>
        <span className="text-[10px] sm:text-xs uppercase tracking-widest mt-0.5 opacity-70">{month}</span>
      </div>

      {/* CENTER — Match info */}
      <div className="flex-1 text-center min-w-0">
        <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
          <span className="text-charcoal font-black text-base sm:text-lg whitespace-nowrap">KOTA FA</span>
          <span className="text-crimson font-bold text-lg sm:text-xl">vs</span>
          <span className="text-charcoal font-semibold text-base sm:text-lg truncate max-w-[120px] sm:max-w-none">
            {match.opponent}
          </span>
        </div>
        <p className="text-gray-400 text-xs mt-1 truncate">
          {match.competition} · {match.time}
        </p>
        {variant === 'result' && match.matchReport && (
          <p className="text-gray-500 text-xs mt-1 line-clamp-1 hidden sm:block">
            {match.matchReport}
          </p>
        )}
      </div>

      {/* RIGHT — Upcoming: venue badge | Result: score */}
      <div className="flex flex-col items-end gap-1 flex-shrink-0">
        {variant === 'upcoming' ? (
          <>
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold text-white
                          ${match.venue === 'Home' ? 'bg-crimson' : 'bg-charcoal'}`}
            >
              {match.venue}
            </span>
            <span className="text-gray-400 text-xs">{match.team}</span>
          </>
        ) : (
          <>
            <div className="flex items-baseline gap-1.5">
              <span className="text-charcoal font-black text-2xl sm:text-3xl leading-none">
                {match.result?.kotaScore}
              </span>
              <span className="text-crimson font-black text-lg">—</span>
              <span className="text-charcoal font-black text-2xl sm:text-3xl leading-none">
                {match.result?.opponentScore}
              </span>
            </div>
            <span className={`text-xs font-black tracking-wide ${labelColor}`}>{label}</span>
          </>
        )}
      </div>
    </div>
  );
}
