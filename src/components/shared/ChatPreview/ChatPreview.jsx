import styles from './ChatPreview.module.css';

/**
 * Ilustración de la app de comunicación.
 * TODO: reemplazar por una captura real de la aplicación cuando esté disponible.
 */
export default function ChatPreview() {
  return (
    <div className={styles.body} aria-hidden="true">
      <div className={`${styles.message} ${styles.received}`}>Recuerden entregar el trabajo práctico el viernes.</div>
      <div className={`${styles.message} ${styles.sent}`}>¡Perfecto, profe!</div>
      <div className={styles.poll}>
        <b>Encuesta en vivo</b>
        <div className={styles.optionA} />
        <div className={styles.optionB} />
      </div>
    </div>
  );
}
