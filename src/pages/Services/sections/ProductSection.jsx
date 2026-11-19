import { PATHS } from '@/app/paths';
import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import BrowserMockup from '@/components/ui/BrowserMockup/BrowserMockup';
import DashboardPreview from '@/components/shared/DashboardPreview/DashboardPreview';
import ChatPreview from '@/components/shared/ChatPreview/ChatPreview';
import styles from './ProductSection.module.css';

const DASHBOARD_KPIS = [
  { value: '94%', label: 'Asistencia' },
  { value: '8,2', label: 'Promedio' },
  { value: '320', label: 'Alumnos' },
];

function ProductPreview({ type }) {
  if (type === 'chat') return <ChatPreview />;
  return <DashboardPreview kpis={DASHBOARD_KPIS} showChart={false} rows={[100, 100, 100, 100, 60]} />;
}

/** Detalle de una plataforma: texto, funcionalidades y previsualización. */
export default function ProductSection({ service, reversed = false }) {
  return (
    <section id={service.id} className={`${styles.product} ${styles[service.variant]} ${reversed ? styles.reversed : ''}`}>
      <div className={styles.content}>
        <Badge>{service.tag}</Badge>
        <h2 className={styles.title}>
          {service.name}
          <br />
          {service.category}
        </h2>
        <p className={styles.description}>{service.description}</p>

        <ul className={styles.features}>
          {service.features.map((feature) => (
            <li key={feature.title}>
              <span className={styles.featureIcon}>
                <Icon name={feature.icon} size={20} />
              </span>
              <div>
                <b>{feature.title}</b>
                <span>{feature.text}</span>
              </div>
            </li>
          ))}
        </ul>

        <p className={styles.audience}>
          <b>Ideal para:</b> {service.audience}
        </p>
        <Button to={PATHS.contact} variant={reversed ? 'purple' : 'teal'}>
          Solicitar demo
        </Button>
      </div>

      <BrowserMockup elevated="soft">
        <ProductPreview type={service.preview} />
      </BrowserMockup>
    </section>
  );
}
