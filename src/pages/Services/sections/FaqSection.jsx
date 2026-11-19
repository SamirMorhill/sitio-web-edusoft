import { servicesFaq } from '@/data/faq';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './FaqSection.module.css';

export default function FaqSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading badge="Preguntas frecuentes" title="Lo que suelen preguntarnos" />
        <div className={styles.list} data-reveal-stagger>
          {servicesFaq.map((item, index) => (
            <details key={item.question} className={styles.item} open={index === 0}>
              <summary className={styles.question}>{item.question}</summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
