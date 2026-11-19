import { PATHS } from '@/app/paths';
import { servicesHero } from '@/data/heroes';
import { services } from '@/data/services';
import Button from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import FullBleedHero from '@/components/shared/FullBleedHero/FullBleedHero';
import { getBrandStyle } from '@/utils/brandStyle';
import styles from './ServicesHeroSection.module.css';

/** Hero de Servicios: pantalla completa con una tarjeta por aplicación que lleva a su detalle. */
export default function ServicesHeroSection() {
  return (
    <FullBleedHero
      content={servicesHero}
      scrollTarget={services[0].id}
      actions={
        <>
          <Button to={PATHS.contact}>Solicitar demo</Button>
          <Button href={`#${services[0].id}`} variant="ghost">
            Ver las plataformas
          </Button>
        </>
      }
      visual={
        <ul className={styles.apps}>
          {services.map((service) => (
            <li key={service.id} className={styles.app} style={getBrandStyle(service.brand)}>
              <a href={`#${service.id}`} className={styles.link}>
                <span className={styles.logo}>
                  {service.logo ? <img src={service.logo} alt="" /> : <Icon name={service.icon} size={26} />}
                </span>
                <span className={styles.info}>
                  <small>{service.category}</small>
                  <b>{service.shortName}</b>
                  <span className={styles.features}>
                    {service.features.slice(0, 3).map((feature) => (
                      <span key={feature.title}>
                        <Icon name={feature.icon} size={14} />
                        {feature.title}
                      </span>
                    ))}
                  </span>
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  <Icon name="arrowRight" size={18} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      }
    />
  );
}
