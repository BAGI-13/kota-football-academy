// app/fixtures/page.tsx
import type { Metadata } from 'next';
import { matches } from '@/lib/data/fixtures';
import PageHero from '@/components/PageHero';
import FixturesTabs from '@/components/FixturesTabs';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Fixtures & Results — Kota Football Academy',
  description:
    'Track every upcoming game, past result, and league standing for Kota Football Academy across all age groups.',
};

const LEAGUE_TABLE = [
  { pos: 1, club: 'Jaipur FC',         p: 14, w: 10, d: 2, l: 2,  gf: 28, ga: 12, pts: 32, isKota: false },
  { pos: 2, club: 'Udaipur Athletic',  p: 14, w: 9,  d: 2, l: 3,  gf: 25, ga: 14, pts: 29, isKota: false },
  { pos: 3, club: 'Kota FA',           p: 14, w: 8,  d: 3, l: 3,  gf: 22, ga: 13, pts: 27, isKota: true  },
  { pos: 4, club: 'Sikar City FC',     p: 14, w: 7,  d: 2, l: 5,  gf: 20, ga: 18, pts: 23, isKota: false },
  { pos: 5, club: 'Alwar FC',          p: 14, w: 5,  d: 4, l: 5,  gf: 17, ga: 19, pts: 19, isKota: false },
  { pos: 6, club: 'Bikaner FC',        p: 14, w: 4,  d: 3, l: 7,  gf: 15, ga: 22, pts: 15, isKota: false },
  { pos: 7, club: 'Pushkar SC',        p: 14, w: 3,  d: 2, l: 9,  gf: 11, ga: 26, pts: 11, isKota: false },
  { pos: 8, club: 'Barmer United',     p: 14, w: 1,  d: 2, l: 11, gf: 8,  ga: 32, pts: 5,  isKota: false },
] as const;

export default function FixturesPage() {
  return (
    <>
      <PageHero
        title="Fixtures & Results"
        subtitle="Track every upcoming game and past result."
        svgSrc="/SVG/fixtures-graphic.svg"
      />

      {/* ── Fixtures tabs ── */}
      <div className="container mx-auto px-6 py-16">
        <FixturesTabs matches={matches} />
      </div>

      {/* ── League Table ── */}
      <section className="container mx-auto px-6 pb-20">
        <SectionHeader
          title="League Standing"
          subtitle="Rajasthan State League — Senior team current standings."
          align="left"
        />

        <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="bg-charcoal text-white text-xs font-bold uppercase tracking-wider">
                  {['Pos','Club','P','W','D','L','GF','GA','GD','Pts'].map((col) => (
                    <th
                      key={col}
                      className={`py-4 px-3 text-left ${col === 'Club' ? 'w-full' : 'text-center whitespace-nowrap'}`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {LEAGUE_TABLE.map((row, i) => {
                  const gd = row.gf - row.ga;
                  return (
                    <tr
                      key={row.club}
                      className={
                        row.isKota
                          ? 'bg-crimson/10 font-bold text-charcoal border-l-4 border-crimson'
                          : i % 2 === 0
                          ? 'bg-white text-gray-700'
                          : 'bg-gray-50 text-gray-700'
                      }
                    >
                      <td className="py-3 px-3 text-center font-black">
                        {row.pos <= 3 ? (
                          <span className={`inline-block w-6 h-6 rounded-full text-xs font-black text-white flex items-center justify-center
                            ${row.pos === 1 ? 'bg-yellow-500' : row.pos === 2 ? 'bg-gray-400' : 'bg-orange-700'}`}>
                            {row.pos}
                          </span>
                        ) : row.pos}
                      </td>
                      <td className="py-3 px-3 font-semibold">
                        {row.isKota ? (
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-crimson inline-block" />
                            {row.club}
                          </span>
                        ) : row.club}
                      </td>
                      <td className="py-3 px-3 text-center">{row.p}</td>
                      <td className="py-3 px-3 text-center font-semibold">{row.w}</td>
                      <td className="py-3 px-3 text-center">{row.d}</td>
                      <td className="py-3 px-3 text-center">{row.l}</td>
                      <td className="py-3 px-3 text-center">{row.gf}</td>
                      <td className="py-3 px-3 text-center">{row.ga}</td>
                      <td className="py-3 px-3 text-center">
                        <span className={gd > 0 ? 'text-green-600' : gd < 0 ? 'text-red-500' : 'text-gray-500'}>
                          {gd > 0 ? `+${gd}` : gd}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center font-black text-base">
                        {row.pts}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Never Miss a Match"
        subtext="Follow us on social media for live updates, match previews, and post-match reports."
        buttonLabel="Contact Academy"
        buttonHref="/contact"
      />
    </>
  );
}
