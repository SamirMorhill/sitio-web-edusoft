import styles from './ScrollProgress.module.css';

/** Barra fina bajo la cabecera que muestra cuánto se avanzó en la página. */
export default function ScrollProgress({ progress }) {
  return <div className={styles.bar} style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />;
}
