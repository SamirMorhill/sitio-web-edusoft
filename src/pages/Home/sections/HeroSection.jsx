import { PATHS } from '@/app/paths';
import { homeHero } from '@/data/home';
import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import BrowserMockup from '@/components/ui/BrowserMockup/BrowserMockup';
import styles from './HeroSection.module.css';

/**
 * Hero de pantalla completa (full bleed): ocupa todo el ancho y el alto de la ventana,
 * pasa por debajo de la cabecera transparente y muestra las dos aplicaciones.
 */
export default function HeroSection() {
  const { badge, titleStart, titleHighlight, titleEnd, text, backgroundImage, showcase } = homeHero;
  const [back, front] = showcase;

  return (
    <section className={styles.hero}>
      <div className={styles.background} aria-hidden="true">
        {backgroundImage && <img src={backgroundImage} alt="" className={styles.photo} />}
        <span className={styles.ring} />
        <span className={styles.glow} />
        <span className={styles.grid} />
      </div>

      <div className={`container ${styles.layout}`}>
        <div className={styles.content}>
          <div className="enter">
            <Badge tone="dark">{badge}</Badge>
          </div>
          <h1 className={`${styles.title} enter`} style={{ '--enter-delay': '120ms' }}>
            {titleStart} <span>{titleHighlight}</span> {titleEnd}
          </h1>
          <p className={`${styles.text} enter`} style={{ '--enter-delay': '240ms' }}>
            {text}
          </p>
          <div className={`${styles.actions} enter`} style={{ '--enter-delay': '360ms' }}>
            <Button to={PATHS.services}>Conocé nuestras soluciones</Button>
            <Button to={PATHS.contact} variant="ghost">
              Contactanos
            </Button>
          </div>
        </div>

        <div className={`${styles.showcase} enter enter--right`} style={{ '--enter-delay': '300ms' }}>
          <BrowserMockup className={`${styles.shot} ${styles.shotBack}`}>
            <img src={back.src} alt={back.alt} />
          </BrowserMockup>
          <BrowserMockup className={`${styles.shot} ${styles.shotFront}`}>
            <img src={front.src} alt={front.alt} />
          </BrowserMockup>
        </div>
      </div>

      <a href="#contenido" className={styles.scrollHint} aria-label="Bajar al contenido">
        <span className={styles.mouse} aria-hidden="true" />
      </a>
    </section>
  );
}
