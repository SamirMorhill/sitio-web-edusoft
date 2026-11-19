import { services } from '@/data/services';
import { homeProcess } from '@/data/process';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import ProcessSteps from '@/components/shared/ProcessSteps/ProcessSteps';
import ServicesHeroSection from './sections/ServicesHeroSection';
import ProductSection from './sections/ProductSection';
import ComparisonSection from './sections/ComparisonSection';
import FaqSection from './sections/FaqSection';

export default function ServicesPage() {
  useScrollToHash();

  return (
    <>
      <ServicesHeroSection />
      {services.map((service, index) => (
        <ProductSection key={service.id} service={service} reversed={index % 2 === 1} />
      ))}
      <ComparisonSection />
      <ProcessSteps badge="Implementación" title="Cómo llevamos EduSoft a tu institución" steps={homeProcess} />
      <FaqSection />
    </>
  );
}
