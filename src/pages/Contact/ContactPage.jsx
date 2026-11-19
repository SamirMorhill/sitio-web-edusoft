import PageHero from '@/components/ui/PageHero/PageHero';
import ContactInfo from './sections/ContactInfo';
import ContactForm from './sections/ContactForm';
import LocationMap from './sections/LocationMap';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <>
      <PageHero breadcrumb="Contacto" title="Contacto" text="Escribinos y coordinamos una demostración sin compromiso." />
      <section className={`section ${styles.contact}`}>
        <div className={`container ${styles.grid}`}>
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <LocationMap />
    </>
  );
}
