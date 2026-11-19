import styles from './ImagePlaceholder.module.css';

/**
 * Muestra la imagen si existe; si no, un recuadro con el texto `label`.
 * variant: 'solid' (fondo lavanda) | 'striped' (logos) | 'dashed' (logos de clientes)
 */
export default function ImagePlaceholder({ src, alt = '', label, variant = 'solid', height = 300 }) {
  if (src) {
    return <img className={styles.image} src={src} alt={alt} style={{ height }} />;
  }
  return (
    <div className={`${styles.placeholder} ${styles[variant]}`} style={{ height }}>
      {label}
    </div>
  );
}
