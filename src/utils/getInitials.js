/** Devuelve las iniciales del primer nombre y del último apellido (ej: "BM"). */
export function getInitials(fullName = '') {
  const words = fullName.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '';
  const first = words[0][0];
  const last = words.length > 1 ? words[words.length - 1][0] : '';
  return `${first}${last}`.toUpperCase();
}
