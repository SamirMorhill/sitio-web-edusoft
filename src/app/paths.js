/** Rutas centralizadas del sitio. Usar siempre estas constantes en los enlaces. */
export const PATHS = {
  home: '/',
  about: '/nosotros',
  services: '/servicios',
  cases: '/casos-de-exito',
  contact: '/contacto',
};

/**
 * Página 404. Se usa también como destino de los enlaces ficticios
 * (redes sociales, WhatsApp) hasta tener los datos reales.
 * No va en PATHS porque no tiene hero (la cabecera no debe ser transparente).
 */
export const NOT_FOUND_PATH = '/404';
