import scadLogo from '@/assets/images/scad/scad-logo.png';
import scadEstablecimientos from '@/assets/images/scad/scad-establecimientos.jpg';

/**
 * Plataformas que ofrece EduSoft.
 * - `brand` (opcional): colores propios de la aplicación. Si no está, se usa `variant` (teal | lavender).
 * - `logo` (opcional): logo propio de la aplicación; reemplaza al ícono.
 * - `screenshot` (opcional): captura real que se muestra en la página Servicios.
 * TODO: reemplazar "[Nombre App 2]" por el nombre real de la segunda aplicación.
 */
export const services = [
  {
    id: 'scad',
    variant: 'teal',
    brand: {
      primary: '#1f4e46',
      accent: '#e9a23b',
      soft: '#e6efea',
      surface: '#fdfbf7',
    },
    logo: scadLogo,
    tag: 'Aplicación web · PWA',
    name: 'SCAD',
    shortName: 'SCAD',
    category: 'Control de asistencia',
    icon: 'calendar',
    summary:
      'Registro de asistencia con código QR para docentes que dictan clases en distintas sedes y extensiones de la institución.',
    description:
      'SCAD (Sistema de Control de Asistencia) permite que cada docente registre su entrada y salida escaneando el código QR del establecimiento, con validación de ubicación. Se integra con los sistemas que ya usa la institución y puede crecer con nuevas funciones según cada cliente.',
    features: [
      { icon: 'qr', title: 'Entrada y salida con QR', text: 'Registro en segundos' },
      { icon: 'mapPin', title: 'Validación por ubicación', text: 'Confirma que el docente está en la sede' },
      { icon: 'building', title: 'Varias sedes', text: 'Todas las extensiones en un lugar' },
      { icon: 'smartphone', title: 'Web y app (PWA)', text: 'Se instala como app nativa' },
    ],
    audience: 'docentes que dictan clases en distintas extensiones de la institución.',
    preview: 'screenshot',
    screenshot: scadEstablecimientos,
    screenshotAlt: 'Pantalla de SCAD para elegir el establecimiento donde registrar la asistencia',
  },
  {
    id: 'comunicacion-participacion',
    variant: 'lavender',
    tag: 'Aplicación web 2',
    name: '[Nombre App 2]',
    shortName: '[App 2]',
    category: 'Comunicación y participación',
    icon: 'chat',
    summary: 'Mensajería, avisos y actividades en vivo que conectan a docentes y alumnos.',
    description:
      'Conecta a docentes y alumnos dentro y fuera del aula, y transforma las clases en espacios más participativos.',
    features: [
      { icon: 'chat', title: 'Mensajería', text: 'Docentes y alumnos' },
      { icon: 'bell', title: 'Avisos', text: 'Comunicados al instante' },
      { icon: 'poll', title: 'Actividades en vivo', text: 'Encuestas y preguntas' },
      { icon: 'smartphone', title: 'Desde el celular', text: 'Sin instalar nada' },
    ],
    audience: 'docentes y alumnos de nivel secundario y superior.',
    preview: 'chat',
  },
];

/** Tabla comparativa: [funcionalidad, incluida en SCAD, incluida en App 2] */
export const serviceComparison = [
  { feature: 'Registro de asistencia con código QR', included: [true, false] },
  { feature: 'Validación por ubicación', included: [true, false] },
  { feature: 'Gestión de varias sedes y extensiones', included: [true, false] },
  { feature: 'Mensajería docente-alumno', included: [false, true] },
  { feature: 'Actividades y encuestas en clase', included: [false, true] },
  { feature: 'Acceso web y desde celular', included: [true, true] },
  { feature: 'Capacitación y soporte', included: [true, true] },
];
