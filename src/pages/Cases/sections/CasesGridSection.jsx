import { successCases, clientLogos } from '@/data/testimonials';
import Badge from '@/components/ui/Badge/Badge';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder/ImagePlaceholder';
import TestimonialCard from '@/components/shared/TestimonialCard/TestimonialCard';
import styles from './CasesGridSection.module.css';

export default function CasesGridSection() {
  return (
    <>
      <div className={styles.grid}>
        {successCases.map((item) => (
          <TestimonialCard key={item.institution} {...item} />
        ))}
      </div>

      <div className={styles.clients}>
        <Badge>Confían en nosotros</Badge>
      </div>
      <ul className={styles.logos}>
        {clientLogos.map((client) => (
          <li key={client.id}>
            <div className={styles.logoBox}>
              <ImagePlaceholder
                src={client.logo}
                alt={`Logo de ${client.name}`}
                label="LOGO"
                variant="dashed"
                height={52}
                fit="contain"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
