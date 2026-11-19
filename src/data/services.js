/**
 * Plataformas que ofrece EduSoft.
 * TODO: reemplazar "[Nombre App X]" por los nombres reales de cada aplicación.
 */
export const services = [
  {
    id: 'gestion-academica',
    variant: 'teal',
    tag: 'Aplicación web 1',
    name: '[Nombre App 1]',
    shortName: '[App 1]',
    category: 'Gestión académica',
    icon: 'calendar',
    summary: 'Notas, asistencia, boletines y seguimiento de actividades en un solo lugar.',
    description:
      'Centraliza la administración académica y libera tiempo a docentes y directivos. Pensada para reducir hasta un 40% el tiempo dedicado a la carga de notas y asistencia.',
    features: [
      { icon: 'check', title: 'Notas y asistencia', text: 'Carga rápida por curso' },
      { icon: 'file', title: 'Boletines automáticos', text: 'Listos para imprimir o enviar' },
      { icon: 'chart', title: 'Reportes', text: 'Paneles para directivos' },
      { icon: 'calendar', title: 'Seguimiento', text: 'Actividades por alumno' },
    ],
    audience: 'directivos, preceptores y docentes.',
    preview: 'dashboard',
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

/** Tabla comparativa: [funcionalidad, incluida en App 1, incluida en App 2] */
export const serviceComparison = [
  { feature: 'Carga de notas y asistencia', included: [true, false] },
  { feature: 'Boletines y reportes', included: [true, false] },
  { feature: 'Mensajería docente-alumno', included: [false, true] },
  { feature: 'Actividades y encuestas en clase', included: [false, true] },
  { feature: 'Acceso web y desde celular', included: [true, true] },
  { feature: 'Capacitación y soporte', included: [true, true] },
];
