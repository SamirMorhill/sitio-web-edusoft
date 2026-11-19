import styles from './BrowserMockup.module.css';

/** Marco tipo ventana de navegador para mostrar capturas o previsualizaciones. */
export default function BrowserMockup({ children, elevated = 'strong', className = '', ...rest }) {
  return (
    <div className={`${styles.frame} ${styles[elevated]} ${className}`} {...rest}>
      <div className={styles.bar} aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      {children}
    </div>
  );
}
