// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* --- Hero Section (Updated for new theme) --- */}
      <section className="container mx-auto text-center py-20 md:py-32">
        <div className="p-6">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
            Kota Football Academy
          </h1>
          <p className="text-lg md:text-2xl mt-4 mb-8 text-slate-700">
            Nurturing the next generation of football stars.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold 
                       text-lg shadow-md hover:bg-orange-700 hover:scale-105 
                       transition-all duration-300 ease-in-out"
          >
            Join Now
          </Link>
        </div>
      </section>

      {/* --- Welcome Section (Styles adjusted for theme) --- */}
      <section className="container mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">
          Welcome to the Academy
        </h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto text-center">
          We are a premier institution in Kota dedicated to developing young
          talent. Our state-of-the-art facilities and expert coaches provide the
          perfect environment for players to grow, learn, and excel in the
          world of football.
        </p>
      </section>
    </>
  );
}