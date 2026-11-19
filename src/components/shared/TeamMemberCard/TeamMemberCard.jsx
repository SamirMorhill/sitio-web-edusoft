import { getInitials } from '@/utils/getInitials';
import styles from './TeamMemberCard.module.css';

/** Tarjeta de integrante del equipo: foto vertical, nombre, rol y frase. Sin foto muestra las iniciales. */
export default function TeamMemberCard({ name, role, quote, photo }) {
  return (
    <article className={styles.card}>
      <div className={styles.photoBox}>
        {photo ? (
          <img className={styles.photo} src={photo} alt={`Foto de ${name}`} loading="lazy" />
        ) : (
          <span className={styles.initials} aria-hidden="true">
            {getInitials(name)}
          </span>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        {quote && <blockquote className={styles.quote}>“{quote}”</blockquote>}
      </div>
    </article>
  );
}
