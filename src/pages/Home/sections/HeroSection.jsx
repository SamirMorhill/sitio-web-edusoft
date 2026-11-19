import { PATHS } from '@/app/paths';
import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import BrowserMockup from '@/components/ui/BrowserMockup/BrowserMockup';
import DashboardPreview from '@/components/shared/DashboardPreview/DashboardPreview';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div>
          <Badge tone="dark">Software educativo · San Miguel de Tucumán</Badge>
          <h1 className={styles.title}>
            Tecnología que <span>simplifica</span> la gestión de tu institución educativa
          </h1>
          <p className={styles.text}>
            Plataformas digitales que integran gestión académica, comunicación entre docentes y alumnos, seguimiento de
            actividades y participación en clase.
          </p>
          <div className={styles.actions}>
            <Button to={PATHS.services}>Conocé nuestras soluciones</Button>
            <Button to={PATHS.contact} variant="ghost">
              Contactanos
            </Button>
          </div>
        </div>
        <BrowserMockup>
          <DashboardPreview />
        </BrowserMockup>
      </div>
    </section>
  );
}
