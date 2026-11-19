import { services } from '@/data/services';
import { homeProcess } from '@/data/process';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import PageHero from '@/components/ui/PageHero/PageHero';
import ProcessSteps from '@/components/shared/ProcessSteps/ProcessSteps';
import ProductSection from './sections/ProductSection';
import ComparisonSection from './sections/ComparisonSection';
import FaqSection from './sections/FaqSection';

export default function ServicesPage() {
  useScrollToHash();

  return (
    <>
      <PageHero
        breadcrumb="Servicios"
        title="Nuestras soluciones"
        text="Dos plataformas web que trabajan juntas o por separado, según lo que tu institución necesite."
      />
      {services.map((service, index) => (
        <ProductSection key={service.id} service={service} reversed={index % 2 === 1} />
      ))}
      <ComparisonSection />
      <ProcessSteps badge="Implementación" title="Cómo llevamos EduSoft a tu institución" steps={homeProcess} />
      <FaqSection />
    </>
  );
}
