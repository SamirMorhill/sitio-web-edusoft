import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/** Estructura común a todas las páginas: cabecera, contenido y pie. Activa las animaciones de scroll. */
export default function MainLayout() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
