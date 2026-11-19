/**
 * Convierte los colores propios de una aplicación (`service.brand`) en variables CSS.
 * Los componentes usan estas variables y, si no existen, caen en los colores de EduSoft.
 */
export function getBrandStyle(brand) {
  if (!brand) return undefined;
  return {
    '--accent': brand.accent,
    '--accent-soft': brand.soft,
    '--brand-primary': brand.primary,
    '--brand-surface': brand.surface,
  };
}
