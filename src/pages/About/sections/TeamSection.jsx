import { team } from '@/data/about';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import Avatar from '@/components/ui/Avatar/Avatar';
import styles from './TeamSection.module.css';

export default function TeamSection() {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionHeading badge="Equipo" title="Las personas detrás de EduSoft" />
        <ul className={styles.grid}>
          {team.map((member, index) => (
            <li key={`${member.role}-${index}`} className={styles.member}>
              <Avatar photo={member.photo} alt={member.name} />
              <h3 className={styles.name}>{member.name}</h3>
              <small className={styles.role}>{member.role}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
