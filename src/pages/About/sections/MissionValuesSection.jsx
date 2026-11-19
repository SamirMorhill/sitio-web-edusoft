import { company } from '@/data/company';
import { values } from '@/data/about';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import Icon from '@/components/ui/Icon/Icon';
import MissionVisionCard from '@/components/shared/MissionVisionCard/MissionVisionCard';
import styles from './MissionValuesSection.module.css';

export default function MissionValuesSection() {
  return (
    <section className="section section--soft">
      <div className="container">
        <div className={styles.missionGrid} data-reveal-stagger>
          <MissionVisionCard icon="target" title="Misión" text={company.mission} surface="white" />
          <MissionVisionCard icon="eye" title="Visión" text={company.vision} variant="lavender" surface="white" />
        </div>

        <div className={styles.valuesHeading}>
          <SectionHeading badge="Nuestros valores" title="Lo que nos define" />
        </div>
        <div className={styles.values} data-reveal-stagger>
          {values.map((value) => (
            <article key={value.title} className={styles.value}>
              <div className={styles.icon}>
                <Icon name={value.icon} />
              </div>
              <h3 className={styles.title}>{value.title}</h3>
              <p className={styles.text}>{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
