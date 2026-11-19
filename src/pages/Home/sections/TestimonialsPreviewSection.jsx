import { Link } from 'react-router-dom';
import { PATHS } from '@/app/paths';
import { successCases } from '@/data/testimonials';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import TestimonialCard from '@/components/shared/TestimonialCard/TestimonialCard';
import styles from './TestimonialsPreviewSection.module.css';

export default function TestimonialsPreviewSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading badge="Casos de éxito" title="Lo que dicen las instituciones" />
        <div className={styles.grid} data-reveal-stagger>
          {successCases.map((item) => (
            <TestimonialCard key={item.institution} {...item} compact />
          ))}
        </div>
        <p className={styles.hint} aria-hidden="true">
          Deslizá para ver más
        </p>
        <p className={styles.more}>
          <Link to={PATHS.cases}>Ver todos los casos</Link>
        </p>
      </div>
    </section>
  );
}
