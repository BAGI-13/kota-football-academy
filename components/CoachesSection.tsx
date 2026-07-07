// components/CoachesSection.tsx
import Image from 'next/image';
import { coaches } from '@/lib/data/coaches';

const CoachCard = ({
  name,
  title,
  imageUrl,
}: {
  name: string;
  title: string;
  imageUrl: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
      <Image
        src={imageUrl}
        alt={name}
        fill
        className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
        sizes="192px"
      />
    </div>
    <div className="mt-4">
      <h3 className="text-xl font-bold text-slate-800">{name}</h3>
      <p className="text-crimson font-semibold">{title}</p>
    </div>
  </div>
);

const CoachesSection = () => (
  <section className="w-full py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">
        Meet Our Expert Coaches
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
        {coaches.map((coach) => (
          <CoachCard
            key={coach.id}
            name={coach.name}
            title={coach.title}
            imageUrl={coach.imageUrl}
          />
        ))}
      </div>
    </div>
  </section>
);

export default CoachesSection;
