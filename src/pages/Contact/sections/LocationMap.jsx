import { company } from '@/data/company';
import Icon from '@/components/ui/Icon/Icon';
import styles from './LocationMap.module.css';

/** Ubicación de EduSoft: mapa de Google Maps con una tarjeta y enlace para llegar. */
export default function LocationMap() {
  const { map, location } = company;

  return (
    <section className="section section--flush-top">
      <div className="container" data-reveal>
        <div className={styles.map}>
          <iframe
            className={styles.frame}
            src={map.embedUrl}
            title={`Mapa: ${map.placeName}`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className={styles.card}>
            <span className={styles.icon}>
              <Icon name="mapPin" size={20} />
            </span>
            <div>
              <b>{map.placeName}</b>
              <small>{location}</small>
              <a href={map.directionsUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Cómo llegar
                <Icon name="arrowRight" size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
