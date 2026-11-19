import { PATHS } from '@/app/paths';
import { aboutHero } from '@/data/heroes';
import Button from '@/components/ui/Button/Button';
import FullBleedHero from '@/components/shared/FullBleedHero/FullBleedHero';
import TeamworkIllustration from './TeamworkIllustration';

/** Hero de Nosotros: pantalla completa con una ilustración de trabajo en equipo. */
export default function AboutHeroSection() {
  return (
    <FullBleedHero
      content={aboutHero}
      scrollTarget="historia"
      actions={
        <>
          <Button href="#equipo">Conocé al equipo</Button>
          <Button to={PATHS.contact} variant="ghost">
            Contactanos
          </Button>
        </>
      }
      visual={<TeamworkIllustration />}
    />
  );
}
