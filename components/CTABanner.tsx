// components/CTABanner.tsx
import Link from 'next/link';

type CTABannerProps = {
  heading: string;
  subtext?: string;
  buttonLabel: string;
  buttonHref: string;
};

export default function CTABanner({
  heading,
  subtext,
  buttonLabel,
  buttonHref,
}: CTABannerProps) {
  return (
    <section className="w-full bg-crimson py-20 px-6 text-center">
      <h2 className="text-white text-3xl md:text-4xl font-black">{heading}</h2>
      {subtext && (
        <p className="text-white/80 text-lg mt-3 mb-8 max-w-xl mx-auto">{subtext}</p>
      )}
      <Link
        href={buttonHref}
        className="inline-block bg-white text-crimson hover:bg-gray-100 px-10 py-4 rounded-xl
                   font-black text-lg shadow-xl transition-all duration-300 hover:scale-105"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
