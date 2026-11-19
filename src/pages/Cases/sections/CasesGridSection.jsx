import { successCases, clientLogos } from '@/data/testimonials';
import Badge from '@/components/ui/Badge/Badge';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder/ImagePlaceholder';
import TestimonialCard from '@/components/shared/TestimonialCard/TestimonialCard';
import styles from './CasesGridSection.module.css';

export default function CasesGridSection() {
  return (
    <>
      <div className={styles.grid} data-reveal-stagger>
        {successCases.map((item) => (
          <TestimonialCard key={item.institution} {...item} />
        ))}
      </div>

      <div className={styles.clients} data-reveal>
        <Badge>Confían en nosotros</Badge>
      </div>
      {/* Cinta de logos que se desplaza en horizontal. La lista se duplica para que el movimiento sea continuo. */}
      <div className={styles.marquee} data-reveal="fade">
        <ul className={styles.track}>
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <li key={`${client.id}-${index}`} aria-hidden={index >= clientLogos.length || undefined}>
              <div className={styles.logoBox}>
                <ImagePlaceholder
                  src={client.logo}
                  alt={index >= clientLogos.length ? '' : `Logo de ${client.name}`}
                  label="LOGO"
                  variant="dashed"
                  height={52}
                  fit="contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
