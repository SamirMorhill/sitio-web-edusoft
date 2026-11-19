import { useEffect, useState } from 'react';

/**
 * Devuelve el avance del scroll vertical de la página (0 a 1)
 * y si el usuario ya bajó más allá de `threshold` píxeles.
 */
export function useScrollProgress(threshold = 12) {
  const [state, setState] = useState({ progress: 0, scrolled: false });

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const { scrollY, innerHeight } = window;
      const max = document.documentElement.scrollHeight - innerHeight;
      setState({ progress: max > 0 ? Math.min(scrollY / max, 1) : 0, scrolled: scrollY > threshold });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [threshold]);

  return state;
}
