import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { PATHS } from '@/app/paths';
import { mainNavigation } from '@/data/navigation';
import { company } from '@/data/company';
import logo from '@/assets/images/logo-edusoft.jpg';
import logoWhite from '@/assets/images/logo-edusoft-blanco.png';
import Button from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import ScrollProgress from '@/components/layout/ScrollProgress/ScrollProgress';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import styles from './Header.module.css';

/** Páginas con hero de pantalla completa: la cabecera es transparente hasta hacer scroll. */
const OVERLAY_PATHS = Object.values(PATHS);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { progress, scrolled } = useScrollProgress();
  const { pathname } = useLocation();
  const closeMenu = () => setMenuOpen(false);

  const overlay = OVERLAY_PATHS.includes(pathname) && !scrolled && !menuOpen;
  const headerClasses = [styles.header, scrolled && styles.scrolled, overlay && styles.overlay].filter(Boolean).join(' ');

  return (
    <header className={headerClasses}>
      <div className={`container ${styles.inner}`}>
        <Link to={PATHS.home} className={styles.brand} onClick={closeMenu}>
          <img src={overlay ? logoWhite : logo} alt={`${company.name}, ${company.tagline}`} />
        </Link>

        <nav aria-label="Navegación principal">
          <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
            {mainNavigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === PATHS.home}
                  className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button to={PATHS.contact} size="sm" className={styles.cta}>
            Solicitar demo
          </Button>
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>
      <ScrollProgress progress={progress} />
    </header>
  );
}
