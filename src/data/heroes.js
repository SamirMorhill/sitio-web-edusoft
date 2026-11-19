import scadScreenshot from '@/assets/images/scad/scad-establecimientos.jpg';
import alumnosScreenshot from '@/assets/images/asistencia-alumnos/alumnos-inicio.jpg';

/**
 * Contenido de los heros de pantalla completa (full bleed) de cada página.
 * El título se arma con titleStart + titleHighlight (resaltado en turquesa) + titleEnd.
 * `backgroundImage`: foto de fondo opcional. Importarla desde src/assets/images y asignarla;
 * se le aplica un velo violeta para que el texto se lea. Mientras sea null se usa el degradado de la marca.
 */

export const homeHero = {
  badge: 'Software educativo · San Miguel de Tucumán',
  titleStart: 'Tecnología que',
  titleHighlight: 'simplifica',
  titleEnd: 'la gestión de tu institución educativa',
  text: 'Plataformas digitales que integran gestión académica, comunicación entre docentes y alumnos, seguimiento de actividades y participación en clase.',
  backgroundImage: null,
  showcase: [
    { src: alumnosScreenshot, alt: 'Pantalla de inicio de EduSoft – Asistencia de alumnos' },
    { src: scadScreenshot, alt: 'Pantalla de establecimientos de SCAD' },
  ],
};

export const aboutHero = {
  badge: 'Nosotros · San Miguel de Tucumán',
  titleStart: 'Un equipo tucumano que',
  titleHighlight: 'transforma',
  titleEnd: 'la educación con tecnología',
  text: 'Analizamos, diseñamos y desarrollamos software a la medida de cada institución del Norte Argentino, para que docentes y directivos dediquen más tiempo a enseñar.',
  backgroundImage: null,
};

export const servicesHero = {
  badge: 'Servicios · Dos plataformas',
  titleStart: 'Dos plataformas que trabajan',
  titleHighlight: 'juntas',
  titleEnd: 'o por separado',
  text: 'SCAD para la asistencia de los docentes y Asistencia de alumnos para el seguimiento en el aula. Elegí una o combiná ambas según lo que tu institución necesite.',
  backgroundImage: null,
};

export const casesHero = {
  badge: 'Casos de éxito',
  titleStart: 'Instituciones que ya',
  titleHighlight: 'confían',
  titleEnd: 'en EduSoft',
  text: 'Conocé cómo otras escuelas del Norte Argentino ordenaron su gestión y cuánto tiempo ganaron con nuestras plataformas.',
  backgroundImage: null,
};

export const contactHero = {
  badge: 'Contacto',
  titleStart: 'Coordinemos una',
  titleHighlight: 'demostración',
  titleEnd: 'sin compromiso',
  text: 'Contanos qué necesita tu institución y te mostramos cómo EduSoft puede ayudarte. Respondemos dentro de las 24 horas hábiles.',
  backgroundImage: null,
  steps: ['Nos escribís', 'Coordinamos una reunión', 'Demo en tu institución'],
};
