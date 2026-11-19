import { PATHS } from '@/app/paths';
import { company } from '@/data/company';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import Button from '@/components/ui/Button/Button';
import MissionVisionCard from '@/components/shared/MissionVisionCard/MissionVisionCard';
import styles from './AboutPreviewSection.module.css';

export default function AboutPreviewSection() {
  return (
    <section className="section section--soft">
      <div className={`container ${styles.grid}`}>
        <div data-reveal="left">
          <SectionHeading
            align="left"
            badge="Quiénes somos"
            title="Acompañamos la transformación digital de la educación"
            lead="Somos una empresa tucumana dedicada al desarrollo de software para instituciones académicas. Trabajamos cerca de cada cliente para que la tecnología sume, y no complique."
          />
          <Button to={PATHS.about} variant="purple" className={styles.button}>
            Conocé más sobre EduSoft
          </Button>
        </div>
        <div className={styles.cards} data-reveal-stagger="right">
          <MissionVisionCard icon="target" title="Misión" text={company.missionShort} surface="white" />
          <MissionVisionCard icon="eye" title="Visión" text={company.visionShort} variant="lavender" surface="white" />
        </div>
      </div>
    </section>
  );
}
