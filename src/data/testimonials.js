import logoHorizonte from '@/assets/images/clients/colegio-horizonte-del-norte.svg';
import logoCardones from '@/assets/images/clients/instituto-tecnico-los-cardones.svg';
import logoValleAlto from '@/assets/images/clients/escuela-normal-valle-alto.svg';
import logoNuevaEsperanza from '@/assets/images/clients/colegio-nueva-esperanza.svg';
import logoBosque from '@/assets/images/clients/instituto-superior-del-bosque.svg';

/**
 * Testimonios y casos de éxito.
 * IMPORTANTE: las instituciones, personas y cifras de este archivo son FICTICIAS (contenido de ejemplo).
 * Reemplazarlas por casos reales antes de publicar el sitio.
 * `logo` y `photo` aceptan una imagen importada desde src/assets/images.
 */
export const featuredTestimonial = {
  quote:
    'Nuestros docentes dictan clases en tres extensiones distintas. Con SCAD dejamos las planillas en papel: cada profesor registra su entrada escaneando el QR y desde la dirección vemos la asistencia de todas las sedes al instante.',
  author: 'Laura Méndez',
  role: 'Directora, Colegio Horizonte del Norte',
  photo: null,
};

export const successCases = [
  {
    institution: 'Colegio Horizonte del Norte',
    quote: 'Controlar la asistencia de los docentes en las tres sedes ahora nos lleva minutos, no horas.',
    author: 'Laura Méndez · Directora',
    logo: logoHorizonte,
    results: [
      { value: '-45%', label: 'tiempo administrativo' },
      { value: '3', label: 'sedes conectadas' },
    ],
  },
  {
    institution: 'Instituto Técnico Los Cardones',
    quote: 'Los profesores registran su entrada en segundos desde el celular, sin instalar nada.',
    author: 'Martín Ríos · Jefe de preceptores',
    logo: logoCardones,
    results: [
      { value: '48', label: 'docentes' },
      { value: '100%', label: 'registros digitales' },
    ],
  },
  {
    institution: 'Escuela Normal Valle Alto',
    quote: 'El acompañamiento de EduSoft durante la implementación fue clave para que todo el equipo se sume.',
    author: 'Carolina Paz · Coordinadora pedagógica',
    logo: logoValleAlto,
    results: [
      { value: '9,5', label: 'satisfacción' },
      { value: '2', label: 'semanas de puesta en marcha' },
    ],
  },
];

/** Logos de instituciones clientes. */
export const clientLogos = [
  { id: 'horizonte', name: 'Colegio Horizonte del Norte', logo: logoHorizonte },
  { id: 'cardones', name: 'Instituto Técnico Los Cardones', logo: logoCardones },
  { id: 'valle-alto', name: 'Escuela Normal Valle Alto', logo: logoValleAlto },
  { id: 'nueva-esperanza', name: 'Colegio Nueva Esperanza', logo: logoNuevaEsperanza },
  { id: 'bosque', name: 'Instituto Superior del Bosque', logo: logoBosque },
];
