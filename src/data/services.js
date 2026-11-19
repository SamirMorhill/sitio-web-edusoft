import scadLogo from '@/assets/images/scad/scad-logo.png';
import scadEstablecimientos from '@/assets/images/scad/scad-establecimientos.jpg';
import edusoftEmblem from '@/assets/images/edusoft-emblema.png';
import alumnosInicio from '@/assets/images/asistencia-alumnos/alumnos-inicio.jpg';

/**
 * Plataformas que ofrece EduSoft.
 * - `brand` (opcional): colores propios de la aplicación. Si no está, se usa `variant` (teal | lavender).
 * - `logo` (opcional): logo propio de la aplicación; reemplaza al ícono.
 * - `screenshot` (opcional): captura real que se muestra en la página Servicios.
 * - `demoUrl` (opcional): enlace para probar la aplicación con datos de demo.
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
    id: 'asistencia-alumnos',
    variant: 'teal',
    brand: {
      primary: '#1f4e46',
      accent: '#e0a33a',
      soft: '#e6efea',
      surface: '#fdfbf7',
    },
    logo: edusoftEmblem,
    tag: 'Aplicación web · PWA',
    name: 'EduSoft – Asistencia de alumnos',
    shortName: 'Asistencia de alumnos',
    category: 'Seguimiento y alerta temprana',
    icon: 'users',
    summary:
      'App para escuelas secundarias que junta la asistencia, las notas y el seguimiento de cada alumno en un solo lugar. Avisa a tiempo cuando un alumno está por quedar libre o en riesgo de abandonar.',
    description:
      'Aplicación web para escuelas secundarias. El docente toma lista en menos de un minuto desde el celular, y la app calcula sola la situación de cada alumno y avisa a la familia por email cuando empeora. Cruza faltas, notas y ánimo en un semáforo de alerta temprana para detectar a tiempo a quien puede dejar la escuela, y suma herramientas de bienestar: un termómetro de cómo llegan los alumnos a clase y un botón de ayuda anónimo que lee solo el equipo de orientación.',
    features: [
      { icon: 'check', title: 'Tomar lista', text: 'Presente, ausente o tarde, y justificación de faltas' },
      { icon: 'bell', title: 'Aviso a las familias', text: 'Estado de cada alumno y email automático' },
      { icon: 'alert', title: 'Alerta temprana', text: 'Semáforo de riesgo de abandono' },
      { icon: 'file', title: 'Notas y boletín', text: 'Planilla del curso y boletín imprimible' },
      { icon: 'calendar', title: 'Calendario de evaluaciones', text: 'Para que no se junten los exámenes' },
      { icon: 'chart', title: 'Reportes', text: 'Gráfico semanal, exportable a Excel y PDF' },
      { icon: 'heart', title: 'Bienestar', text: 'Termómetro de la clase y botón de ayuda anónimo' },
      { icon: 'qr', title: 'Asistencia docente', text: 'Registro con QR y ubicación GPS' },
    ],
    audience:
      'docentes, equipo de orientación, directivos y alumnos (sin cuenta, solo con su DNI o un código).',
    preview: 'screenshot',
    screenshot: alumnosInicio,
    screenshotAlt: 'Pantalla de inicio del docente en EduSoft – Asistencia de alumnos',
    demoUrl: 'https://edusoft-rosy.vercel.app',
  },
];

/** Tabla comparativa: [funcionalidad, incluida en SCAD, incluida en Asistencia de alumnos] */
export const serviceComparison = [
  { feature: 'Registro de asistencia docente con QR y ubicación', included: [true, true] },
  { feature: 'Gestión de varias sedes y extensiones', included: [true, true] },
  { feature: 'Asistencia de alumnos (presente, ausente, tarde)', included: [false, true] },
  { feature: 'Notas, planilla del curso y boletín', included: [false, true] },
  { feature: 'Alerta temprana de abandono', included: [false, true] },
  { feature: 'Aviso automático a las familias', included: [false, true] },
  { feature: 'Termómetro de la clase y botón de ayuda anónimo', included: [false, true] },
  { feature: 'Reportes exportables a Excel y PDF', included: [false, true] },
  { feature: 'Web y app instalable (PWA)', included: [true, true] },
  { feature: 'Capacitación y soporte', included: [true, true] },
];
