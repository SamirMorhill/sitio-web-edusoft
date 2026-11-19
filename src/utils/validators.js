const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isEmpty = (value) => !String(value ?? '').trim();
export const isValidEmail = (value) => EMAIL_PATTERN.test(String(value).trim());

/** Valida el formulario de contacto. Devuelve un objeto { campo: mensaje } con los errores. */
export function validateContactForm(values) {
  const errors = {};
  if (isEmpty(values.name)) errors.name = 'Ingresá tu nombre.';
  if (isEmpty(values.institution)) errors.institution = 'Ingresá el nombre de la institución.';
  if (isEmpty(values.email)) errors.email = 'Ingresá tu email.';
  else if (!isValidEmail(values.email)) errors.email = 'El email no es válido.';
  if (isEmpty(values.message)) errors.message = 'Contanos brevemente qué necesitás.';
  return errors;
}
