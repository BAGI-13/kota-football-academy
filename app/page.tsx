// app/page.tsx
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import ProgramSection from '@/components/ProgramSection';
import CoachesSection from '@/components/CoachesSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import AchievementsSection from '@/components/AchievementsSection';
import HighlightsSection from '@/components/HighlightsSection'; // 1. Naya component import kiya
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ProgramSection />
      <CoachesSection />
      <FacilitiesSection />
      <AchievementsSection />
      <HighlightsSection /> {/* 2. Yahan add kiya */}
      <TestimonialsSection />
    </>
  );
}