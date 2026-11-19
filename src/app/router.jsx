import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout/MainLayout';
import HomePage from '@/pages/Home/HomePage';
import AboutPage from '@/pages/About/AboutPage';
import ServicesPage from '@/pages/Services/ServicesPage';
import CasesPage from '@/pages/Cases/CasesPage';
import ContactPage from '@/pages/Contact/ContactPage';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import { PATHS } from './paths';

export const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: PATHS.about, element: <AboutPage /> },
      { path: PATHS.services, element: <ServicesPage /> },
      { path: PATHS.cases, element: <CasesPage /> },
      { path: PATHS.contact, element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
