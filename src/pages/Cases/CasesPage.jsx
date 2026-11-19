import { PATHS } from '@/app/paths';
import PageHero from '@/components/ui/PageHero/PageHero';
import CtaBanner from '@/components/shared/CtaBanner/CtaBanner';
import FeaturedTestimonial from './sections/FeaturedTestimonial';
import CasesGridSection from './sections/CasesGridSection';

export default function CasesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Casos de éxito"
        title="Casos de éxito"
        text="Instituciones que ya trabajan con EduSoft y los resultados que lograron."
      />
      <section className="section">
        <div className="container">
          <FeaturedTestimonial />
          <CasesGridSection />
        </div>
      </section>
      <CtaBanner
        title="¿Querés que tu institución sea el próximo caso?"
        text="Contanos qué necesitás y armamos una propuesta a medida."
        buttonLabel="Hablemos"
        to={PATHS.contact}
      />
    </>
  );
}
