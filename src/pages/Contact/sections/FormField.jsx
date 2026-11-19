import { useId } from 'react';
import styles from './ContactForm.module.css';

/** Campo de formulario con etiqueta y mensaje de error. as: 'input' | 'select' | 'textarea' */
export default function FormField({ label, as = 'input', options = [], error, ...inputProps }) {
  const id = useId();
  const errorId = `${id}-error`;
  const common = {
    id,
    className: `${styles.control} ${error ? styles.invalid : ''}`,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
    ...inputProps,
  };

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {as === 'select' && (
        <select {...common}>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      )}
      {as === 'textarea' && <textarea {...common} />}
      {as === 'input' && <input {...common} />}
      {error && (
        <span id={errorId} className={styles.fieldError}>
          {error}
        </span>
      )}
    </div>
  );
}
