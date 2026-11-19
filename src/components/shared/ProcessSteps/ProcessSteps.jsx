import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './ProcessSteps.module.css';

/** Sección violeta con los pasos de trabajo numerados. */
export default function ProcessSteps({ badge, title, lead, steps }) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading badge={badge} title={title} lead={lead} tone="dark" />
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.number}>{index + 1}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
