/**
 * Envío del formulario de contacto.
 * TODO: conectar con el servicio real (API propia, EmailJS, Formspree, etc.).
 * La URL se configura con la variable de entorno VITE_CONTACT_ENDPOINT (ver .env.example).
 */
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

export async function sendContactMessage(payload) {
  if (!CONTACT_ENDPOINT) {
    // Modo demostración: simula el envío mientras no haya un servicio configurado.
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { ok: true, simulated: true };
  }

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('No pudimos enviar tu consulta. Intentá nuevamente.');
  }

  return { ok: true };
}
