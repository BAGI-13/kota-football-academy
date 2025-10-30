// components/HighlightsSection.tsx
import React from "react";
import Image from "next/image";

/* ⭐ CollageNote
   - Sticky note / tag jaisa feel
   - position prop se note ko image ke idhar-udhar rakhenge
*/
type CollageNoteProps = {
  text: string;
  position:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "left"
    | "right"
    | "top"
    | "bottom";
  rotate?: "slight-left" | "slight-right" | "none";
};

const notePosMap: Record<CollageNoteProps["position"], string> = {
  "top-left": "top-2 left-2",
  "top-right": "top-2 right-2",
  "bottom-left": "bottom-2 left-2",
  "bottom-right": "bottom-2 right-2",
  left: "top-1/2 -translate-y-1/2 left-2",
  right: "top-1/2 -translate-y-1/2 right-2",
  top: "left-1/2 -translate-x-1/2 top-2",
  bottom: "left-1/2 -translate-x-1/2 bottom-2",
};

const rotateMap: Record<NonNullable<CollageNoteProps["rotate"]>, string> = {
  "slight-left": "-rotate-2",
  "slight-right": "rotate-2",
  none: "",
};

const CollageNote: React.FC<CollageNoteProps> = ({ text, position, rotate = "none" }) => (
  <div
    className={`absolute ${notePosMap[position]} ${rotateMap[rotate]} 
    pointer-events-none select-none
    rounded-xl px-3 py-1.5 text-xs md:text-sm font-medium
    bg-white/80 backdrop-blur-sm text-slate-800 shadow-[0_6px_20px_rgba(0,0,0,0.12)] ring-1 ring-black/5`}
  >
    {text}
  </div>
);

/* 🖼️ CollageItem
   - Masonry columns ke andar ek card
   - Aspect ratio vary karta hai taaki organic look aaye
   - Notes array se stickers idhar-udhar appear hongi
*/
type CollageItemProps = {
  title: string;
  description: string;
  imageUrl: string;
  aspect?: "16/9" | "4/3" | "1/1" | "3/4";
  notes?: CollageNoteProps[];
  priority?: boolean;
};

const CollageItem: React.FC<CollageItemProps> = ({
  title,
  description,
  imageUrl,
  aspect = "4/3",
  notes = [],
  priority = false,
}) => {
  // aspect utility map (Tailwind arbitrary aspect)
  const aspectClass =
    aspect === "16/9"
      ? "aspect-[16/9]"
      : aspect === "1/1"
      ? "aspect-[1/1]"
      : aspect === "3/4"
      ? "aspect-[3/4]"
      : "aspect-[4/3]";

  return (
    <figure
      role="group"
      aria-label={title}
      className="break-inside-avoid mb-5 relative"
    >
      <div
        className={`relative w-full ${aspectClass} overflow-hidden rounded-2xl
        shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-slate-100
        transition-transform duration-300 ease-out hover:scale-[1.01] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]`}
      >
        {/* Image: fill + object-cover */}
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center"
          style={{ backgroundColor: "#d1d5db" }}
          priority={priority}
        />

        {/* Dark gradient bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Title/desc bottom-left */}
        <figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
          <h3 className="text-base md:text-lg font-semibold drop-shadow-sm">
            {title}
          </h3>
          <p className="text-xs md:text-sm opacity-90">{description}</p>
        </figcaption>

        {/* Floating notes (stickers) */}
        {notes.map((n, i) => (
          <CollageNote key={i} {...n} />
        ))}
      </div>
    </figure>
  );
};

/* 📚 Data: 12 organic collage items
   - Notes ko different positions/rotations diye gaye hain
   - Image paths ko apne actual assets se replace kar lena
*/
const ITEMS: CollageItemProps[] = [
  {
    title: "State Champions 2024",
    description: "U-18 team clinched the state title in a thrilling final.",
    imageUrl: "/placeholder-highlight-1.jpg",
    aspect: "16/9",
    priority: true,
    notes: [
      { text: "Full house crowd!", position: "top-left", rotate: "slight-left" },
      { text: "Final score 3–1", position: "bottom-right", rotate: "none" },
    ],
  },
  {
    title: "National Camp Call-up",
    description: "Ravi Prakash (U-16) invited to national camp.",
    imageUrl: "/placeholder-highlight-2.jpg",
    aspect: "3/4",
    notes: [
      { text: "Hard work pays!", position: "right", rotate: "slight-right" },
    ],
  },
  {
    title: "Media Feature",
    description: "Covered by a leading daily for youth development.",
    imageUrl: "/placeholder-highlight-3.jpg",
    aspect: "4/3",
    notes: [
      { text: "Front page!", position: "top", rotate: "slight-left" },
      { text: "City spotlight", position: "bottom", rotate: "slight-right" },
    ],
  },
  {
    title: "All-India Tournament",
    description: "Faced top academies; great learning curve.",
    imageUrl: "/placeholder-highlight-4.jpg",
    aspect: "1/1",
    notes: [{ text: "Quarter-finals", position: "top-right", rotate: "none" }],
  },
  {
    title: "Grassroots Bootcamp",
    description: "U-12 fundamentals across 3 districts.",
    imageUrl: "/placeholder-highlight-5.jpg",
    aspect: "4/3",
    notes: [{ text: "150+ kids", position: "bottom-left", rotate: "slight-left" }],
  },
  {
    title: "High-Performance Clinic",
    description: "10-day intensive by invited coaches.",
    imageUrl: "/placeholder-highlight-6.jpg",
    aspect: "16/9",
    notes: [{ text: "GPS tracking", position: "top-right", rotate: "slight-right" }],
  },
  {
    title: "Sports Science",
    description: "Injury prevention & analytics partnership.",
    imageUrl: "/placeholder-highlight-7.jpg",
    aspect: "3/4",
    notes: [{ text: "Screenings done", position: "left", rotate: "slight-left" }],
  },
  {
    title: "Women’s Team",
    description: "U-17 girls reached state semi-finals.",
    imageUrl: "/placeholder-highlight-8.jpg",
    aspect: "1/1",
    notes: [{ text: "Proud moment", position: "top-left", rotate: "none" }],
  },
  {
    title: "Alumni Debut",
    description: "Former captain signed by a national league club.",
    imageUrl: "/placeholder-highlight-9.jpg",
    aspect: "4/3",
    notes: [{ text: "Pro contract!", position: "right", rotate: "slight-right" }],
  },
  {
    title: "Community Clinics",
    description: "Free weekend training in rural blocks.",
    imageUrl: "/placeholder-highlight-10.jpg",
    aspect: "16/9",
    notes: [{ text: "Outreach drive", position: "bottom", rotate: "slight-left" }],
  },
  {
    title: "Study Support",
    description: "Academics × sports hours introduced.",
    imageUrl: "/placeholder-highlight-11.jpg",
    aspect: "3/4",
    notes: [{ text: "After practice", position: "top-right", rotate: "slight-right" }],
  },
  {
    title: "Facility Upgrade",
    description: "New turf, lights, and recovery room.",
    imageUrl: "/placeholder-highlight-12.jpg",
    aspect: "4/3",
    notes: [{ text: "Match-ready!", position: "bottom-right", rotate: "none" }],
  },
];

/* 🎯 HighlightsSection
   - Masonry columns (organic collage look)
   - columns utilities + break-inside-avoid for clean wrapping
   - No CTA button as requested
*/
const HighlightsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-6">
        {/* Heading minimal & clean */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800">
            Our Journey &amp; Highlights
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            A living scrapbook of wins, appearances, and milestones.
          </p>
        </div>

        {/* Masonry columns: mobile 1, md 2, lg 3 */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {ITEMS.map((it, idx) => (
            <CollageItem key={it.title + idx} {...it} priority={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
