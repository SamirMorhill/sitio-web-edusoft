import { PATHS } from '@/app/paths';
import { highlightStats } from '@/data/stats';
import StatsBar from '@/components/shared/StatsBar/StatsBar';
import CtaBanner from '@/components/shared/CtaBanner/CtaBanner';
import HeroSection from './sections/HeroSection';
import ServicesOverviewSection from './sections/ServicesOverviewSection';
import AboutPreviewSection from './sections/AboutPreviewSection';
import TestimonialsPreviewSection from './sections/TestimonialsPreviewSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar stats={highlightStats} />
      <ServicesOverviewSection />
      <AboutPreviewSection />
      <TestimonialsPreviewSection />
      <CtaBanner
        title="¿Querés ver EduSoft en acción?"
        text="Coordinamos una demostración sin compromiso en tu institución."
        buttonLabel="Solicitar demo"
        to={PATHS.contact}
      />
    </>
  );
}
