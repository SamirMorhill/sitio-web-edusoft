import { useState } from 'react';
import { contactInterests, contactRoles } from '@/data/contactForm';
import { sendContactMessage } from '@/services/contactService';
import { validateContactForm } from '@/utils/validators';

const INITIAL_VALUES = {
  name: '',
  institution: '',
  email: '',
  phone: '',
  role: contactRoles[0],
  interest: contactInterests[0],
  message: '',
};

/** Maneja estado, validación y envío del formulario de contacto. */
export function useContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('sending');
    try {
      await sendContactMessage(values);
      setStatus('success');
      setValues(INITIAL_VALUES);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return { values, errors, status, errorMessage, handleChange, handleSubmit };
}
