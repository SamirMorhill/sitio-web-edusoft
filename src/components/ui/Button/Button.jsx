import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * Botón reutilizable.
 * - `to`: navega dentro del sitio (React Router).
 * - `href`: enlace externo (se abre en otra pestaña), ancla ("#seccion") o ruta interna ("/ruta").
 * - sin ninguno: <button>.
 * variant: 'teal' | 'purple' | 'ghost' | 'white' | 'outline'
 */
export default function Button({ to, href, variant = 'teal', size = 'md', className = '', children, ...rest }) {
  const classes = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(' ');

  if (to || href?.startsWith('/')) {
    return (
      <Link to={to || href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = !href.startsWith('#');
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
