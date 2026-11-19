import { services } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import ServiceCard from '@/components/shared/ServiceCard/ServiceCard';
import styles from './ServicesOverviewSection.module.css';

export default function ServicesOverviewSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          badge="Nuestras soluciones"
          title="Dos plataformas para el aula y la gestión"
          lead="Herramientas intuitivas y escalables, adaptadas a las necesidades de cada institución."
        />
        <div className={styles.grid} data-reveal-stagger>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
