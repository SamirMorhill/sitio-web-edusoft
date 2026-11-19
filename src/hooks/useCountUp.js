import { useEffect, useRef, useState } from 'react';

/**
 * Anima un número desde 0 hasta su valor cuando el elemento entra en pantalla.
 * Acepta textos como "40%", "+9/10" o "100%": anima la primera cifra y conserva el resto.
 * Devuelve [ref, textoActual].
 */
export function useCountUp(value, duration = 1400) {
  const ref = useRef(null);
  const match = String(value).match(/^(\D*)(\d+)(.*)$/);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const element = ref.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!match || !element || reduceMotion || !('IntersectionObserver' in window)) return undefined;

    const [, prefix, number, suffix] = match;
    const target = Number(number);
    let frame = 0;
    setDisplay(`${prefix}0${suffix}`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - t) ** 3;
          setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return [ref, display];
}
