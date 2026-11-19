import PageHero from '@/components/ui/PageHero/PageHero';
import StorySection from './sections/StorySection';
import MissionValuesSection from './sections/MissionValuesSection';
import ObjectivesSection from './sections/ObjectivesSection';
import TeamSection from './sections/TeamSection';

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="Nosotros"
        title="Sobre EduSoft"
        text="Software educativo hecho en Tucumán, pensado para las instituciones del Norte Argentino."
      />
      <StorySection />
      <MissionValuesSection />
      <ObjectivesSection />
      <TeamSection />
    </>
  );
}
