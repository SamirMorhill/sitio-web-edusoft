import { PATHS } from '@/app/paths';
import { homeHero } from '@/data/home';
import Button from '@/components/ui/Button/Button';
import BrowserMockup from '@/components/ui/BrowserMockup/BrowserMockup';
import FullBleedHero from '@/components/shared/FullBleedHero/FullBleedHero';
import styles from './HeroSection.module.css';

/** Hero de Inicio: pantalla completa con las capturas de las dos aplicaciones. */
export default function HeroSection() {
  const { badge, titleStart, titleHighlight, titleEnd, text, backgroundImage, showcase } = homeHero;
  const [back, front] = showcase;

  return (
    <FullBleedHero
      badge={badge}
      title={
        <>
          {titleStart} <span>{titleHighlight}</span> {titleEnd}
        </>
      }
      text={text}
      backgroundImage={backgroundImage}
      scrollTarget="contenido"
      actions={
        <>
          <Button to={PATHS.services}>Conocé nuestras soluciones</Button>
          <Button to={PATHS.contact} variant="ghost">
            Contactanos
          </Button>
        </>
      }
      visual={
        <div className={styles.showcase}>
          <BrowserMockup className={`${styles.shot} ${styles.shotBack}`}>
            <img src={back.src} alt={back.alt} />
          </BrowserMockup>
          <BrowserMockup className={`${styles.shot} ${styles.shotFront}`}>
            <img src={front.src} alt={front.alt} />
          </BrowserMockup>
        </div>
      }
    />
  );
}
