import { Link } from 'react-router-dom';
import { PATHS } from '@/app/paths';
import styles from './PageHero.module.css';

/** Cabecera de las páginas internas, con miga de pan. */
export default function PageHero({ breadcrumb, title, text }) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <nav className={`${styles.crumb} enter`} aria-label="Ruta de navegación">
          <Link to={PATHS.home}>Inicio</Link> / <span>{breadcrumb}</span>
        </nav>
        <h1 className={`${styles.title} enter`} style={{ '--enter-delay': '100ms' }}>{title}</h1>
        {text && (
          <p className={`${styles.text} enter`} style={{ '--enter-delay': '200ms' }}>
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
