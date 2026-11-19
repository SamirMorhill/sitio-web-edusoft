import { objectives } from '@/data/about';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './ObjectivesSection.module.css';

export default function ObjectivesSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          badge="Objetivos"
          title="Hacia dónde vamos"
          lead="Metas concretas que guían nuestro trabajo durante el primer año."
        />
        <div className={styles.grid} data-reveal-stagger>
          {objectives.map((objective) => (
            <article key={objective.title} className={styles.goal}>
              <span className={`${styles.badge} ${objective.badge.length > 4 ? styles.badgeSmall : ''}`}>
                {objective.badge}
              </span>
              <div>
                <h3 className={styles.title}>{objective.title}</h3>
                <p className={styles.text}>{objective.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
