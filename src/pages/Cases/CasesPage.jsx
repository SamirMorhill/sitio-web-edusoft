import { PATHS } from '@/app/paths';
import CtaBanner from '@/components/shared/CtaBanner/CtaBanner';
import CasesHeroSection from './sections/CasesHeroSection';
import FeaturedTestimonial from './sections/FeaturedTestimonial';
import CasesGridSection from './sections/CasesGridSection';
import styles from './CasesPage.module.css';

export default function CasesPage() {
  return (
    <>
      <CasesHeroSection />
      <section id="casos" className={`section ${styles.cases}`}>
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
