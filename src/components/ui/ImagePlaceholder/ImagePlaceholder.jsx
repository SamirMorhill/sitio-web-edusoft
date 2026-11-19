import styles from './ImagePlaceholder.module.css';

/**
 * Muestra la imagen si existe; si no, un recuadro con el texto `label`.
 * variant: 'solid' (fondo lavanda) | 'striped' (logos) | 'dashed' (logos de clientes)
 * fit: 'cover' (fotos, llenan el espacio) | 'contain' (logos, se ven completos)
 * align: posición de la imagen cuando fit es 'contain' ('left' | 'center')
 */
export default function ImagePlaceholder({
  src,
  alt = '',
  label,
  variant = 'solid',
  height = 300,
  fit = 'cover',
  align = 'center',
}) {
  if (src) {
    return (
      <img
        className={`${styles.image} ${styles[fit]}`}
        src={src}
        alt={alt}
        style={{ height, objectPosition: align === 'left' ? 'left center' : 'center' }}
      />
    );
  }
  return (
    <div className={`${styles.placeholder} ${styles[variant]}`} style={{ height }}>
      {label}
    </div>
  );
}
