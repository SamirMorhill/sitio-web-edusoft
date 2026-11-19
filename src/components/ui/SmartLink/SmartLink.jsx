import { Link } from 'react-router-dom';

/**
 * Enlace que decide solo cómo abrirse según el destino:
 * - "/ruta": navegación interna (React Router), misma pestaña.
 * - "#seccion", "mailto:", "tel:": enlace normal en la misma pestaña.
 * - "https://...": sitio externo, en otra pestaña.
 */
export default function SmartLink({ href, children, ...rest }) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  }

  const external = /^https?:\/\//.test(href);
  return (
    <a href={href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })} {...rest}>
      {children}
    </a>
  );
}
