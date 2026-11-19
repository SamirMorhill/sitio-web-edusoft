/**
 * Testimonios y casos de éxito.
 * TODO: reemplazar por testimonios reales. `logo` acepta una imagen importada.
 */
export const featuredTestimonial = {
  quote:
    'Antes la carga de notas nos llevaba días al cierre de cada trimestre. Con EduSoft lo resolvemos en una tarde y los boletines salen solos.',
  author: '[Nombre]',
  role: 'Directora, [Institución de ejemplo], San Miguel de Tucumán',
  photo: null,
};

export const successCases = [
  {
    institution: '[Colegio de ejemplo]',
    quote: 'Cargar la asistencia ahora nos lleva la mitad del tiempo.',
    author: 'Directora · Colegio de ejemplo',
    logo: null,
    results: [
      { value: '-45%', label: 'tiempo administrativo' },
      { value: '320', label: 'alumnos' },
    ],
  },
  {
    institution: '[Instituto de ejemplo]',
    quote: 'Los alumnos participan mucho más con las actividades en vivo.',
    author: 'Docente · Instituto de ejemplo',
    logo: null,
    results: [
      { value: '+60%', label: 'participación' },
      { value: '18', label: 'docentes' },
    ],
  },
  {
    institution: '[Escuela de ejemplo]',
    quote: 'La comunicación con los alumnos es mucho más ordenada.',
    author: 'Coordinador · Escuela de ejemplo',
    logo: null,
    results: [
      { value: '9,5', label: 'satisfacción' },
      { value: '2', label: 'plataformas' },
    ],
  },
];

/** Logos de instituciones clientes (agregar imágenes importadas en `logo`). */
export const clientLogos = Array.from({ length: 5 }, (_, i) => ({ id: i, name: 'Logo', logo: null }));
