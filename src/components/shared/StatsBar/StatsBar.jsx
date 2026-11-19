import styles from './StatsBar.module.css';

/** Barra de cifras destacadas que se superpone al hero. */
export default function StatsBar({ stats }) {
  return (
    <section className={styles.wrapper} aria-label="Cifras destacadas">
      <div className="container">
        <dl className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.value}>{stat.value}</dt>
              <dd className={styles.label}>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
