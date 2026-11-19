import fotoRocio from '@/assets/images/team/rocio-cristo-ochi.jpg';
import fotoSamir from '@/assets/images/team/samir-morhill.jpg';

export const values = [
  { icon: 'zap', title: 'Innovación', text: 'Buscamos siempre la mejor forma de resolver problemas reales del aula.' },
  { icon: 'users', title: 'Accesibilidad', text: 'Herramientas simples que cualquier docente puede usar desde el primer día.' },
  { icon: 'shield', title: 'Confiabilidad', text: 'Datos seguros y plataformas estables en las que la institución puede apoyarse.' },
  { icon: 'heart', title: 'Compromiso', text: 'Acompañamos a cada cliente de cerca, antes y después de implementar.' },
];

export const objectives = [
  {
    badge: '5',
    title: 'Instituciones en Tucumán',
    text: 'Implementar nuestro software en 5 instituciones educativas de San Miguel de Tucumán en 12 meses.',
  },
  {
    badge: '40%',
    title: 'Menos carga administrativa',
    text: 'Reducir en un 40% el tiempo que los docentes dedican a cargar notas y asistencia durante el primer semestre.',
  },
  {
    badge: '2.500',
    title: 'Comunidad digital',
    text: 'Alcanzar 2.500 seguidores en TikTok e Instagram y 10 consultas mensuales por canales digitales en 8 meses.',
  },
  {
    badge: '9+',
    title: 'Clientes satisfechos',
    text: 'Mantener una retención del 100% y una satisfacción superior a 9 puntos durante el primer año.',
  },
];

/**
 * Equipo. Ordenado según el recorrido de un proyecto: análisis, diseño y desarrollo.
 * Para agregar o cambiar una foto, guardarla en src/assets/images/team (formato 4:5)
 * y asignarla en `photo`. Si `photo` es null se muestran las iniciales.
 */
export const team = [
  { name: 'Brenda Luciana Marinelli', role: 'Analista Funcional', photo: null },
  { name: 'Rocío Cristo Ochi', role: 'Diseño y experiencia', photo: fotoRocio },
  { name: 'Samir Ricardo Morhill', role: 'Desarrollador', photo: fotoSamir },
];
