import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Desplaza la vista hasta el elemento indicado en el hash de la URL (ej: /servicios#gestion-academica). */
export function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const element = document.getElementById(decodeURIComponent(hash.slice(1)));
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);
}
