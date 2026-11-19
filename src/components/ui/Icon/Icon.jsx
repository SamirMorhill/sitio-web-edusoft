import { icons } from './icons';
import styles from './Icon.module.css';

/**
 * Ícono de línea. `name` debe existir en icons.js.
 * Hereda el color del texto (currentColor).
 */
export default function Icon({ name, size = 26, className = '', title }) {
  const paths = icons[name];
  if (!paths) return null;

  return (
    <svg
      className={`${styles.icon} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title && <title>{title}</title>}
      {paths}
    </svg>
  );
}
