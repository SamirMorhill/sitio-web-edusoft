import { Link } from 'react-router-dom';
import { PATHS } from '@/app/paths';
import Icon from '@/components/ui/Icon/Icon';
import { getBrandStyle } from '@/utils/brandStyle';
import styles from './ServiceCard.module.css';

/** Tarjeta resumen de una plataforma (usada en Inicio). Usa los colores propios de la app si los tiene. */
export default function ServiceCard({ service }) {
  const classes = [styles.card, styles[service.variant], service.brand && styles.branded].filter(Boolean).join(' ');

  return (
    <article className={classes} style={getBrandStyle(service.brand)}>
      <div className={styles.icon}>
        {service.logo ? (
          <img src={service.logo} alt={`Logo de ${service.name}`} className={styles.logo} />
        ) : (
          <Icon name={service.icon} />
        )}
      </div>
      <span className={styles.tag}>{service.tag}</span>
      <h3 className={styles.title}>
        {service.shortName} · {service.category}
      </h3>
      <p className={styles.text}>{service.summary}</p>
      <Link className={styles.more} to={`${PATHS.services}#${service.id}`}>
        Ver detalle
      </Link>
    </article>
  );
}
