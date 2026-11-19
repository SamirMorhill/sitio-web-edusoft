import { Link } from 'react-router-dom';
import { PATHS } from '@/app/paths';
import Icon from '@/components/ui/Icon/Icon';
import styles from './ServiceCard.module.css';

/** Tarjeta resumen de una plataforma (usada en Inicio). */
export default function ServiceCard({ service }) {
  return (
    <article className={`${styles.card} ${styles[service.variant]}`}>
      <div className={styles.icon}>
        <Icon name={service.icon} />
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
