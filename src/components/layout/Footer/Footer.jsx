import { Link } from 'react-router-dom';
import { PATHS } from '@/app/paths';
import { mainNavigation } from '@/data/navigation';
import { company } from '@/data/company';
import { services } from '@/data/services';
import logo from '@/assets/images/logo-edusoft.jpg';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className={styles.logo}>
              <img src={logo} alt={company.name} />
            </span>
            <p>Soluciones educativas digitales para instituciones del Norte Argentino.</p>
          </div>

          <div>
            <h2 className={styles.title}>Sitio</h2>
            <ul className={styles.list}>
              {mainNavigation.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={styles.title}>Soluciones</h2>
            <ul className={styles.list}>
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={`${PATHS.services}#${service.id}`}>{service.category}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={styles.title}>Seguinos</h2>
            <ul className={styles.list}>
              <li>
                <a href={company.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href={company.social.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} {company.name} · {company.location}</span>
          <span>Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
}
