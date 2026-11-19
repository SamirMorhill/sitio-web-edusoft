import { PATHS } from '@/app/paths';
import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import BrowserMockup from '@/components/ui/BrowserMockup/BrowserMockup';
import DashboardPreview from '@/components/shared/DashboardPreview/DashboardPreview';
import { getBrandStyle } from '@/utils/brandStyle';
import styles from './ProductSection.module.css';

const DASHBOARD_KPIS = [
  { value: '94%', label: 'Asistencia' },
  { value: '8,2', label: 'Promedio' },
  { value: '320', label: 'Alumnos' },
];

function ProductPreview({ service }) {
  if (service.preview === 'screenshot') {
    return <img className={styles.screenshot} src={service.screenshot} alt={service.screenshotAlt} loading="lazy" />;
  }
  return <DashboardPreview kpis={DASHBOARD_KPIS} showChart={false} rows={[100, 100, 100, 100, 60]} />;
}

/**
 * Detalle de una plataforma.
 * Arriba: presentación (texto + botones) junto a la captura. Abajo: funciones en una grilla de ancho completo.
 * `reversed` alterna el lado de la captura y el color de fondo de la sección.
 */
export default function ProductSection({ service, reversed = false }) {
  const classes = [styles.product, styles[service.variant], service.brand && styles.branded, reversed && styles.reversed]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={service.id} className={classes} style={getBrandStyle(service.brand)}>
      <div className="container">
        <div className={styles.intro}>
          <div className={styles.content}>
            <div className={styles.heading}>
              {service.logo && <img src={service.logo} alt="" className={styles.logo} />}
              <Badge>{service.tag}</Badge>
            </div>
            <h2 className={styles.title}>
              {service.name}
              <span className={styles.category}>{service.category}</span>
            </h2>
            <p className={styles.description}>{service.description}</p>
            <p className={styles.audience}>
              <b>Ideal para:</b> {service.audience}
            </p>
            <div className={styles.actions}>
              <Button to={PATHS.contact} variant={reversed ? 'purple' : 'teal'} className={styles.cta}>
                Solicitar demo
              </Button>
              {service.demoUrl && (
                <Button href={service.demoUrl} variant="outline" className={styles.demo}>
                  Probar la app
                </Button>
              )}
            </div>
          </div>

          <BrowserMockup elevated="soft" className={styles.preview}>
            <ProductPreview service={service} />
          </BrowserMockup>
        </div>

        <ul className={styles.features} aria-label={`Funciones de ${service.name}`}>
          {service.features.map((feature) => (
            <li key={feature.title} className={styles.feature}>
              <span className={styles.featureIcon}>
                <Icon name={feature.icon} size={22} />
              </span>
              <b>{feature.title}</b>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
