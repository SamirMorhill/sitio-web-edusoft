import Badge from '@/components/ui/Badge/Badge';
import styles from './FullBleedHero.module.css';

/**
 * Hero de pantalla completa (full bleed): ocupa todo el ancho y el alto de la ventana
 * y pasa por debajo de la cabecera transparente (ver OVERLAY_PATHS en Header).
 *
 * Props:
 *  - content: textos del hero (ver src/data/heroes.js): badge, titleStart, titleHighlight,
 *    titleEnd, text y backgroundImage opcional (se le aplica un velo violeta)
 *  - actions: botones debajo del texto
 *  - visual: contenido de la columna derecha (se oculta en celulares)
 *  - scrollTarget: id de la sección a la que lleva el indicador para bajar
 */
export default function FullBleedHero({ content, actions, visual, scrollTarget }) {
  const { badge, titleStart, titleHighlight, titleEnd, text, backgroundImage } = content;

  return (
    <section className={styles.hero}>
      <div className={styles.background} aria-hidden="true">
        {backgroundImage && <img src={backgroundImage} alt="" className={styles.photo} />}
        <span className={styles.ring} />
        <span className={styles.glow} />
        <span className={styles.dots} />
      </div>

      <div className={`container ${styles.layout}`}>
        <div>
          {badge && (
            <div className="enter">
              <Badge tone="dark">{badge}</Badge>
            </div>
          )}
          <h1 className={`${styles.title} enter`} style={{ '--enter-delay': '120ms' }}>
            {titleStart} {titleHighlight && <span>{titleHighlight}</span>} {titleEnd}
          </h1>
          {text && (
            <p className={`${styles.text} enter`} style={{ '--enter-delay': '240ms' }}>
              {text}
            </p>
          )}
          {actions && (
            <div className={`${styles.actions} enter`} style={{ '--enter-delay': '360ms' }}>
              {actions}
            </div>
          )}
        </div>

        {visual && (
          <div className={`${styles.visual} enter enter--right`} style={{ '--enter-delay': '300ms' }}>
            {visual}
          </div>
        )}
      </div>

      {scrollTarget && (
        <a href={`#${scrollTarget}`} className={styles.scrollHint} aria-label="Bajar al contenido">
          <span className={styles.mouse} aria-hidden="true" />
        </a>
      )}
    </section>
  );
}
