import Icon from '@/components/ui/Icon/Icon';
import styles from './MissionVisionCard.module.css';

/** Tarjeta con borde lateral para Misión / Visión. variant: 'teal' | 'lavender' */
export default function MissionVisionCard({ icon, title, text, variant = 'teal', surface = 'soft' }) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${styles[surface]}`}>
      <h3 className={styles.title}>
        <Icon name={icon} size={22} className={styles.icon} />
        {title}
      </h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
