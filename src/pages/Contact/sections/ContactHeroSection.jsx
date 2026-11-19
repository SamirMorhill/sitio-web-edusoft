import { contactHero } from '@/data/heroes';
import { company } from '@/data/company';
import Button from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import FullBleedHero from '@/components/shared/FullBleedHero/FullBleedHero';
import styles from './ContactHeroSection.module.css';

/** Hero de Contacto: los pasos para coordinar una demo y los canales de contacto. */
export default function ContactHeroSection() {
  const { contact, location } = company;

  return (
    <FullBleedHero
      content={contactHero}
      scrollTarget="formulario"
      actions={
        <>
          <Button href="#formulario">Escribinos</Button>
          <Button href={contact.whatsappUrl} variant="ghost">
            WhatsApp
          </Button>
        </>
      }
      visual={
        <div className={styles.scene}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>
                <Icon name="calendar" size={20} />
              </span>
              <div>
                <b>Tu demo en 3 pasos</b>
                <small>{contact.hours}</small>
              </div>
            </div>
            <ol className={styles.steps}>
              {contactHero.steps.map((step, index) => (
                <li key={step}>
                  <span className={styles.number}>{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <ul className={styles.channels}>
            <li>
              <Icon name="mail" size={18} />
              {contact.email}
            </li>
            <li>
              <Icon name="phone" size={18} />
              {contact.whatsapp}
            </li>
            <li>
              <Icon name="mapPin" size={18} />
              {location}
            </li>
          </ul>
        </div>
      }
    />
  );
}
