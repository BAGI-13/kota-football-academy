'use client';

import { useMemo, useState, useCallback } from 'react';
import Image from 'next/image';
import { galleryItems, type GalleryCategory } from '@/lib/data/gallery';
import PageHero from '@/components/PageHero';
import GalleryCard from '@/components/GalleryCard';
import Lightbox from '@/components/Lightbox';

const TABS: Array<'All' | GalleryCategory> = [
  'All',
  'Match',
  'Training',
  'Event',
  'Team',
  'Behind the Scenes',
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof TABS)[number]>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return galleryItems;
    return galleryItems.filter((g) => g.category === activeCategory);
  }, [activeCategory]);

  const imageOnly = useMemo(
    () => filtered.filter((g) => g.type === 'image'),
    [filtered],
  );

  const openForItem = useCallback(
    (item: (typeof galleryItems)[number]) => {
      if (item.type === 'video' && item.videoUrl) {
        setActiveVideoUrl(item.videoUrl);
        return;
      }
      if (item.type === 'image') {
        const idx = imageOnly.findIndex((i) => i.id === item.id);
        if (idx >= 0) setLightboxIndex(idx);
      }
    },
    [imageOnly],
  );

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null || i <= 0 ? i : i - 1));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return i;
      if (i >= imageOnly.length - 1) return i;
      return i + 1;
    });
  }, [imageOnly.length]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const tabBase =
    'rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer';
  const tabActive = 'bg-crimson text-white shadow-md';
  const tabInactive =
    'bg-white text-charcoal border border-gray-200 hover:border-crimson hover:text-crimson';

  return (
    <>
      <PageHero
        title="Media Gallery"
        subtitle="Relive the moments that define us."
      />

      <div className="container mx-auto px-6 py-12">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveCategory(tab)}
              className={`${tabBase} ${activeCategory === tab ? tabActive : tabInactive}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Image
              src="/SVG/no-results.svg"
              alt=""
              width={280}
              height={200}
              className="opacity-80"
              unoptimized
            />
            <p className="text-gray-500 text-lg font-medium text-center max-w-sm">
              No media found in this category yet.
            </p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {filtered.map((item) => (
              <GalleryCard key={item.id} item={item} onClick={() => openForItem(item)} />
            ))}
          </div>
        )}
      </div>

      <Lightbox
        items={imageOnly}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={goPrev}
        onNext={goNext}
      />

      {/* Video modal */}
      {activeVideoUrl && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={() => setActiveVideoUrl(null)}
        >
          <button
            type="button"
            onClick={() => setActiveVideoUrl(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl z-[70] px-3 py-1"
            aria-label="Close video"
          >
            ✕
          </button>
          <div
            className="aspect-video w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={activeVideoUrl}
              title="Gallery video"
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
