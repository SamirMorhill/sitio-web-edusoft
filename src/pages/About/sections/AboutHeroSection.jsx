import { PATHS } from '@/app/paths';
import { aboutHero } from '@/data/about';
import Button from '@/components/ui/Button/Button';
import FullBleedHero from '@/components/shared/FullBleedHero/FullBleedHero';
import TeamworkIllustration from './TeamworkIllustration';

/** Hero de Nosotros: pantalla completa con una ilustración de trabajo en equipo. */
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
      visual={<TeamworkIllustration />}
    />
  );
}
