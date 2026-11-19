import { team } from '@/data/about';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import TeamMemberCard from '@/components/shared/TeamMemberCard/TeamMemberCard';
import styles from './TeamSection.module.css';

export default function TeamSection() {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionHeading badge="Equipo" title="Las personas detrás de EduSoft" />
        <ul className={styles.grid}>
          {team.map((member) => (
            <li key={member.name}>
              <TeamMemberCard {...member} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
