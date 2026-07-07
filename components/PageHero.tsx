// components/PageHero.tsx
import Image from 'next/image';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  svgSrc?: string;
};

export default function PageHero({ title, subtitle, svgSrc }: PageHeroProps) {
  return (
    <section className="relative w-full bg-charcoal py-24 md:py-32 overflow-hidden">
      {/* Crimson diagonal accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-20 top-0 w-[600px] h-full bg-crimson opacity-[0.08] skew-x-[-12deg] transform-gpu" />
      </div>

      {/* SVG illustration — right half, semi-transparent */}
      {svgSrc && (
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[40%] opacity-25 pointer-events-none select-none">
          <Image src={svgSrc} alt="" width={600} height={400} />
        </div>
      )}

      {/* Text content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="w-14 h-1 bg-crimson rounded-full mb-6" />
        <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-400 text-lg md:text-xl mt-4 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
