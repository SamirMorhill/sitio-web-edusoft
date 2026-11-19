import scadScreenshot from '@/assets/images/scad/scad-establecimientos.jpg';
import alumnosScreenshot from '@/assets/images/asistencia-alumnos/alumnos-inicio.jpg';

/**
 * Contenido del hero de pantalla completa de Inicio.
 * `backgroundImage`: foto de fondo opcional (ej: aula o equipo). Importarla desde
 * src/assets/images y asignarla aquí; se le aplica un velo violeta para que el texto se lea.
 * Mientras sea null, el fondo es el degradado de la marca.
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
