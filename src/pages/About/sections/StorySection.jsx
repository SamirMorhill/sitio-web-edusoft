import { company } from '@/data/company';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import BrowserMockup from '@/components/ui/BrowserMockup/BrowserMockup';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder/ImagePlaceholder';
import styles from './StorySection.module.css';

// TODO: importar la foto real del equipo, ej: import teamPhoto from '@/assets/images/team/equipo.jpg';
const teamPhoto = null;

export default function StorySection() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div data-reveal="left">
          <SectionHeading align="left" badge="Nuestra historia" title="Quiénes somos" lead={company.summary} />
          <p className={styles.text}>{company.story}</p>
        </div>
        <BrowserMockup elevated="soft" data-reveal="right">
          <ImagePlaceholder src={teamPhoto} alt="Equipo de EduSoft" label="FOTO DEL EQUIPO / OFICINA" />
        </BrowserMockup>
      </div>
    </section>
  );
}
