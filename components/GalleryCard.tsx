// components/GalleryCard.tsx
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import type { GalleryItem } from '@/lib/data/gallery';

const aspectByCategory: Record<GalleryItem['category'], string> = {
  Match:               'aspect-[16/9]',
  Training:            'aspect-[4/3]',
  Event:               'aspect-[4/3]',
  Team:                'aspect-[1/1]',
  'Behind the Scenes': 'aspect-[3/4]',
};

type Props = {
  item: GalleryItem;
  onClick: () => void;
};

export default function GalleryCard({ item, onClick }: Props) {
  const aspectClass = aspectByCategory[item.category];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative block w-full break-inside-avoid mb-4 cursor-pointer
                  rounded-2xl overflow-hidden text-left
                  transition-transform duration-300 ease-out hover:scale-[1.01]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2`}
    >
      <div className={`relative w-full ${aspectClass}`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />

        {item.type === 'video' && (
          <div className="absolute top-3 right-3 bg-crimson rounded-full p-2.5 shadow-lg">
            <FaPlay className="text-white text-sm ml-0.5" />
          </div>
        )}

        <div
          className="absolute inset-0 bg-charcoal/50 opacity-0 group-hover:opacity-100
                     transition-opacity duration-300 flex items-end pb-4 pl-4 pr-4"
        >
          {item.caption && (
            <p className="text-white text-sm font-medium line-clamp-3">{item.caption}</p>
          )}
        </div>
      </div>
    </button>
  );
}
