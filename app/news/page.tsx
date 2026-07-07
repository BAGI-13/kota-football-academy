'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { newsArticles, type NewsCategory } from '@/lib/data/news';
import Badge from '@/components/ui/Badge';
import NewsCard from '@/components/NewsCard';

const ALL_CATEGORIES: Array<'All' | NewsCategory> = [
  'All',
  'Match Report',
  'Academy News',
  'Player Spotlight',
  'Event',
  'Announcement',
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof ALL_CATEGORIES)[number]>('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const featured = useMemo(() => newsArticles.find((a) => a.isFeatured), []);

  const filtered = useMemo(() => {
    const nonFeatured = newsArticles.filter((a) => !a.isFeatured);
    if (activeCategory === 'All') return nonFeatured;
    return nonFeatured.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const tabBase = 'rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer';
  const tabActive = 'bg-crimson text-white shadow-md';
  const tabInactive = 'bg-white text-charcoal border border-gray-200 hover:border-crimson hover:text-crimson';

  return (
    <>
      {/* ── Custom minimal header (spec: no PageHero here) ── */}
      <div className="bg-charcoal py-16 px-6 text-center">
        <h1 className="text-white text-5xl font-black">News & Announcements</h1>
        <p className="text-gray-400 text-lg mt-2">Latest updates from Kota Football Academy.</p>
      </div>

      <div className="container mx-auto px-6 py-12">

        {/* ── Featured article ── */}
        {featured && (
          <Link href={`/news/${featured.slug}`} className="group block mb-16">
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={featured.imageUrl}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="100vw"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent" />
              <div className="absolute bottom-8 left-8 max-w-2xl">
                <Badge label={featured.category} variant="crimson" />
                <h2 className="text-white text-3xl md:text-4xl font-black mt-3 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-gray-300 text-lg mt-2 line-clamp-2">{featured.excerpt}</p>
                <span className="mt-4 inline-block bg-crimson hover:bg-crimson-dark text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 group-hover:shadow-lg">
                  Read Full Article
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* ── Category filter ── */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
              className={`${tabBase} ${activeCategory === cat ? tabActive : tabInactive}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Article grid ── */}
        {visible.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visible.map((article) => (
                <NewsCard key={article.slug} article={article} variant="default" />
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-12">
                <button
                  type="button"
                  onClick={() => setVisibleCount((c) => c + 6)}
                  className="bg-white border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white
                             px-8 py-3 rounded-xl font-bold transition-all duration-300 cursor-pointer"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center py-20 gap-4">
            <p className="text-gray-400 text-lg font-medium">No articles in this category yet.</p>
          </div>
        )}

      </div>
    </>
  );
}
