import { contactInterests, contactRoles } from '@/data/contactForm';
import { useContactForm } from '@/hooks/useContactForm';
import Button from '@/components/ui/Button/Button';
import FormField from './FormField';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const { values, errors, status, errorMessage, handleChange, handleSubmit } = useContactForm();
  const isSending = status === 'sending';

  const fieldProps = (name) => ({ name, value: values[name], onChange: handleChange, error: errors[name] });

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <FormField label="Nombre y apellido" placeholder="Ej: María Pérez" autoComplete="name" {...fieldProps('name')} />
        <FormField label="Institución" placeholder="Nombre del colegio o instituto" {...fieldProps('institution')} />
      </div>
      <div className={styles.row}>
        <FormField label="Email" type="email" placeholder="tu@email.com" autoComplete="email" {...fieldProps('email')} />
        <FormField label="Teléfono" type="tel" placeholder="381 ..." autoComplete="tel" {...fieldProps('phone')} />
      </div>
      <div className={styles.row}>
        <FormField label="Cargo" as="select" options={contactRoles} {...fieldProps('role')} />
        <FormField label="¿Qué te interesa?" as="select" options={contactInterests} {...fieldProps('interest')} />
      </div>
      <FormField label="Mensaje" as="textarea" rows={4} placeholder="Contanos sobre tu institución" {...fieldProps('message')} />

      <Button type="submit" disabled={isSending}>
        {isSending ? 'Enviando…' : 'Enviar consulta'}
      </Button>

      <div aria-live="polite">
        {status === 'success' && <p className={styles.success}>¡Gracias! Recibimos tu consulta y te responderemos a la brevedad.</p>}
        {status === 'error' && <p className={styles.error}>{errorMessage}</p>}
      </div>
    </form>
  );
}
