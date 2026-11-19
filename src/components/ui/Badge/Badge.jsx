import styles from './Badge.module.css';

/** Etiqueta pequeña sobre los títulos. tone: 'light' | 'dark' (para fondos violetas). */
export default function Badge({ children, tone = 'light' }) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
