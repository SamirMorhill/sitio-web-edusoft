import ContactHeroSection from './sections/ContactHeroSection';
import ContactInfo from './sections/ContactInfo';
import ContactForm from './sections/ContactForm';
import LocationMap from './sections/LocationMap';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <section id="formulario" className={`section ${styles.contact}`}>
        <div className={`container ${styles.grid}`}>
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <LocationMap />
    </>
  );
}
