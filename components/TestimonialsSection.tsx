// components/TestimonialsSection.tsx
"use client";

// 1. Zaroori hooks import kiye
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
// 2. Button aur Star icons import kiye
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// --- Dummy Data (waisa hi hai) ---
const testimonialsData = [
  {
    quote: "The coaches are exceptional. My son's skills and confidence have grown immensely. It's more than just football; it's a family.",
    name: "A. K. Gupta",
    relation: "Parent of U-12 Player",
    imageUrl: "/placeholder-profile-1.jpg",
  },
  {
    quote: "Training here is tough but rewarding. The facilities are top-notch, and the focus on tactical development is amazing.",
    name: "Ravi Prakash",
    relation: "Senior Team Player",
    imageUrl: "/placeholder-profile-2.jpg",
  },
  {
    quote: "A very professional setup. The focus on fitness and discipline is exactly what my daughter needed.",
    name: "Sunita Sharma",
    relation: "Parent of U-18 Player",
    imageUrl: "/placeholder-profile-3.jpg",
  },
  {
    quote: "The best academy in Kota, without a doubt. The coaches genuinely care about each player's individual growth.",
    name: "Vikram Rathore",
    relation: "Local Scout",
    imageUrl: "/placeholder-profile-4.jpg",
  },
  {
    quote: "I love the goalkeeper training. It's intense and covers everything from basics to advanced techniques.",
    name: "Aman Singh",
    relation: "Goalkeeper (U-16)",
    imageUrl: "/placeholder-profile-5.jpg",
  },
  {
    quote: "The summer camp was fantastic. My kids learned so much and had a great time.",
    name: "Priya Jain",
    relation: "Parent",
    imageUrl: "/placeholder-profile-6.jpg",
  },
  {
    quote: "The attention to detail in tactical sessions is impressive. I feel like a much smarter player now.",
    name: "Mohit Agarwal",
    relation: "Midfielder",
    imageUrl: "/placeholder-profile-7.jpg",
  },
  {
    quote: "Great facilities and a very positive environment for young players to develop.",
    name: "Rajesh Meena",
    relation: "Parent",
    imageUrl: "/placeholder-profile-8.jpg",
  },
  {
    quote: "From fitness to footwork, every aspect is covered professionally. Highly recommended.",
    name: "Karan Solanki",
    relation: "Defender",
    imageUrl: "/placeholder-profile-9.jpg",
  },
  {
    quote: "My dribbling and shooting have improved so much in just six months. Thank you, coaches!",
    name: "Sahil Khan",
    relation: "Forward (U-14)",
    imageUrl: "/placeholder-profile-10.jpg",
  },
  {
    quote: "The physiotherapy team is excellent. They helped me recover from my ankle injury quickly.",
    name: "Deepak Verma",
    relation: "Senior Team Player",
    imageUrl: "/placeholder-profile-11.jpg",
  },
  {
    quote: "A safe and encouraging place for kids to learn football. The management is also very responsive.",
    name: "Neha Dave",
    relation: "Parent",
    imageUrl: "/placeholder-profile-12.jpg",
  },
];

// --- Star Rating Component (waisa hi hai) ---
const StarRating = () => (
  <div className="flex gap-1 text-yellow-400">
    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
  </div>
);

// --- Testimonial Card Component (waisa hi hai) ---
const TestimonialCard = ({
  quote,
  name,
  relation,
  imageUrl,
}: {
  quote: string;
  name: string;
  relation: string;
  imageUrl: string;
}) => (
  <div className="embla__slide flex-[0_0_90%] md:flex-[0_0_48%] lg:flex-[0_0_32%] mx-4">
    <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
      <div>
        <StarRating />
        <blockquote className="text-slate-700 italic text-lg my-4">
          "{quote}"
        </blockquote>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <p className="font-bold text-slate-800">{name}</p>
          <p className="text-sm text-slate-600">{relation}</p>
        </div>
      </div>
    </div>
  </div>
);

// --- 4. Naye Button Components Banaye ---
const PrevButton = ({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) => (
  <button
    // p-2 ko p-3 kiya
    className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4
               bg-white rounded-full p-3 shadow-md
               hover:bg-gray-100 transition-all
               disabled:opacity-30 disabled:cursor-not-allowed z-10"
    onClick={onClick}
    disabled={disabled}
    aria-label="Previous slide"
  >
    {/* text-xl add kiya */}
    <FaChevronLeft className="text-orange-600 text-xl" />
  </button>
);

const NextButton = ({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) => (
  <button
    // p-2 ko p-3 kiya
    className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4
               bg-white rounded-full p-3 shadow-md
               hover:bg-gray-100 transition-all
               disabled:opacity-30 disabled:cursor-not-allowed z-10"
    onClick={onClick}
    disabled={disabled}
    aria-label="Next slide"
  >
    {/* text-xl add kiya */}
    <FaChevronRight className="text-orange-600 text-xl" />
  </button>
);

// --- Main Section Component (Carousel) ---
const TestimonialsSection = () => {
  // 3. Carousel hook se 'emblaApi' get kiya
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, // Loop ko false kiya taaki buttons disable ho sakein
    align: 'start',
  });

  // 5. Button state aur functions banaye
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 px-6">
          What Our Members Say
        </h2>

        {/* 6. Carousel ko relative container mein dala */}
        <div className="relative max-w-6xl mx-auto">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {testimonialsData.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  relation={testimonial.relation}
                  imageUrl={testimonial.imageUrl}
                />
              ))}
            </div>
          </div>

          {/* Buttons ko yahan add kiya */}
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;