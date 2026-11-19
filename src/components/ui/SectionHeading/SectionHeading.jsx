import Badge from '@/components/ui/Badge/Badge';
import styles from './SectionHeading.module.css';

/** Encabezado de sección: badge + título + bajada. */
export default function SectionHeading({ badge, title, lead, align = 'center', tone = 'light', as: Tag = 'h2' }) {
  return (
    <div className={`${styles.heading} ${styles[align]} ${styles[tone]}`}>
      {badge && <Badge tone={tone}>{badge}</Badge>}
      {title && <Tag className={styles.title}>{title}</Tag>}
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  );
}
