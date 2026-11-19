import { useCountUp } from '@/hooks/useCountUp';
import styles from './StatsBar.module.css';

function Stat({ value, label }) {
  const [ref, display] = useCountUp(value);
  return (
    <div className={styles.stat}>
      <dt className={styles.value} ref={ref} aria-label={value}>
        {display}
      </dt>
      <dd className={styles.label}>{label}</dd>
    </div>
  );
}

/** Barra de cifras destacadas que se superpone al hero. Las cifras cuentan hacia arriba al aparecer. */
export default function StatsBar({ stats }) {
  return (
    <section id="contenido" className={styles.wrapper} aria-label="Cifras destacadas">
      <div className="container">
        <dl className={styles.grid} data-reveal="up">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </dl>
      </div>
    </section>
  );
}
