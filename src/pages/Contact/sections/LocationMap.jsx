import { company } from '@/data/company';
import Icon from '@/components/ui/Icon/Icon';
import styles from './LocationMap.module.css';

/**
 * Ubicación de la empresa.
 * TODO: reemplazar por un mapa real (por ejemplo un <iframe> de Google Maps con la dirección).
 */
export default function LocationMap() {
  return (
    <section className="section section--flush-top">
      <div className="container">
        <div className={styles.map}>
          <div className={styles.pin}>
            <Icon name="mapPin" size={22} className={styles.pinIcon} />
            {company.name} · San Miguel de Tucumán
          </div>
        </div>
      </div>
    </section>
  );
}
