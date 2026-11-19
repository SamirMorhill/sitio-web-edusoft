import { PATHS } from '@/app/paths';
import { aboutHero, team } from '@/data/about';
import Button from '@/components/ui/Button/Button';
import FullBleedHero from '@/components/shared/FullBleedHero/FullBleedHero';
import { getInitials } from '@/utils/getInitials';
import styles from './AboutHeroSection.module.css';

/** Hero de Nosotros: pantalla completa con las fotos del equipo en abanico. */
export default function AboutHeroSection() {
  const { badge, titleStart, titleHighlight, titleEnd, text, backgroundImage } = aboutHero;

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
      scrollTarget="historia"
      actions={
        <>
          <Button href="#equipo" target="_self" rel={undefined}>
            Conocé al equipo
          </Button>
          <Button to={PATHS.contact} variant="ghost">
            Contactanos
          </Button>
        </>
      }
      visual={
        <ul className={styles.team}>
          {team.map((member) => (
            <li key={member.name} className={styles.member}>
              <div className={styles.photoBox}>
                {member.photo ? (
                  <img src={member.photo} alt={`Foto de ${member.name}`} className={styles.photo} />
                ) : (
                  <span className={styles.initials} aria-hidden="true">
                    {getInitials(member.name)}
                  </span>
                )}
              </div>
              <div className={styles.caption}>
                <b>{member.name.split(' ')[0]}</b>
                <span>{member.role}</span>
              </div>
            </li>
          ))}
        </ul>
      }
    />
  );
}
