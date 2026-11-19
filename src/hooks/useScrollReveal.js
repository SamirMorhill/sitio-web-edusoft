import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SELECTOR = '[data-reveal]';
const VISIBLE_CLASS = 'is-revealed';
const DONE_ATTR = 'data-revealed';
const STAGGER_STEP_MS = 110;
const DURATION_MS = 750;

/**
 * Al terminar la animación se quitan los atributos de reveal para que el elemento
 * vuelva a sus estilos normales (por ejemplo, los efectos al pasar el mouse).
 */
function finishReveal(element) {
  const delay = parseInt(element.style.getPropertyValue('--reveal-delay'), 10) || 0;
  window.setTimeout(() => {
    element.removeAttribute('data-reveal');
    element.classList.remove(VISIBLE_CLASS);
    element.style.removeProperty('--reveal-delay');
    element.setAttribute(DONE_ATTR, '');
  }, delay + DURATION_MS);
}

/**
 * Anima la aparición de los elementos con el atributo `data-reveal` cuando entran en pantalla.
 *
 * Uso en JSX:
 *   <div data-reveal>                      sube y aparece (por defecto)
 *   <div data-reveal="left">               entra desde la izquierda (también: right, zoom, fade)
 *   <ul data-reveal-stagger>               sus hijos directos aparecen uno detrás de otro
 *
 * Se usa una sola vez en el layout. Vuelve a buscar elementos al cambiar de página
 * y cuando aparecen elementos nuevos en el DOM. Respeta "reducir movimiento" del sistema.
 */
export function useScrollReveal() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      root.classList.remove('reveal-ready');
      return undefined;
    }
    root.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(VISIBLE_CLASS);
          observer.unobserve(entry.target);
          finishReveal(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    const prepareStagger = () => {
      document.querySelectorAll('[data-reveal-stagger]').forEach((parent) => {
        Array.from(parent.children).forEach((child, index) => {
          if (child.hasAttribute(DONE_ATTR) || child.classList.contains(VISIBLE_CLASS)) return;
          if (!child.hasAttribute('data-reveal')) child.setAttribute('data-reveal', parent.dataset.revealStagger || 'up');
          child.style.setProperty('--reveal-delay', `${index * STAGGER_STEP_MS}ms`);
        });
      });
    };

    const observePending = () => {
      prepareStagger();
      document.querySelectorAll(`${SELECTOR}:not(.${VISIBLE_CLASS})`).forEach((element) => observer.observe(element));
    };

    observePending();
    const mutations = new MutationObserver(observePending);
    mutations.observe(document.querySelector('main') ?? document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);
}
