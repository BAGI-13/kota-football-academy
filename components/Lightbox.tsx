'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import type { GalleryItem } from '@/lib/data/gallery';

type Props = {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({ items, activeIndex, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, onClose, onPrev, onNext]);

  if (activeIndex === null || items.length === 0) return null;

  const item = items[activeIndex];
  if (!item) return null;

  const atFirst = activeIndex <= 0;
  const atLast  = activeIndex >= items.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl cursor-pointer z-[60] p-2"
        aria-label="Close"
      >
        <FaTimes />
      </button>

      <button
        type="button"
        onClick={onPrev}
        disabled={atFirst}
        className={`absolute left-4 top-1/2 -translate-y-1/2 text-crimson text-3xl
                    hover:text-white cursor-pointer transition-colors z-[60] p-2
                    ${atFirst ? 'opacity-30 pointer-events-none' : ''}`}
        aria-label="Previous image"
      >
        <FaChevronLeft />
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={atLast}
        className={`absolute right-4 top-1/2 -translate-y-1/2 text-crimson text-3xl
                    hover:text-white cursor-pointer transition-colors z-[60] p-2
                    ${atLast ? 'opacity-30 pointer-events-none' : ''}`}
        aria-label="Next image"
      >
        <FaChevronRight />
      </button>

      <div className="flex flex-col items-center max-w-[90vw]">
        <div className="relative max-h-[80vh] max-w-[90vw] w-auto">
          <Image
            src={item.src}
            alt={item.alt}
            width={1600}
            height={1200}
            className="max-h-[80vh] max-w-[90vw] w-auto h-auto object-contain rounded-xl shadow-2xl"
            unoptimized
          />
        </div>
        {item.caption && (
          <p className="mt-3 text-white/80 text-sm text-center max-w-lg px-4">{item.caption}</p>
        )}
      </div>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {activeIndex + 1} / {items.length}
      </p>
    </div>
  );
}
