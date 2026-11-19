import { company } from '@/data/company';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import Icon from '@/components/ui/Icon/Icon';
import styles from './ContactInfo.module.css';

export default function ContactInfo() {
  const { contact, social, location } = company;

  const items = [
    { icon: 'mapPin', label: location },
    { icon: 'mail', label: contact.email, href: `mailto:${contact.email}` },
    { icon: 'phone', label: `WhatsApp: ${contact.whatsapp}`, href: contact.whatsappUrl },
  ];

  return (
    <div>
      <SectionHeading
        align="left"
        badge="Datos de contacto"
        title="Hablemos de tu institución"
        lead="Respondemos todas las consultas dentro de las 24 horas hábiles."
      />

      <ul className={styles.items}>
        {items.map((item) => (
          <li key={item.icon}>
            <span className={styles.icon}>
              <Icon name={item.icon} size={20} />
            </span>
            {item.href ? <a href={item.href}>{item.label}</a> : item.label}
          </li>
        ))}
      </ul>

      <div className={styles.hours}>
        <b>Horario de atención</b>
        {contact.hours}
      </div>

      <div className={styles.social}>
        <a className={styles.instagram} href={social.instagram} target="_blank" rel="noopener noreferrer">
          <Icon name="instagram" size={18} />
          Instagram
        </a>
        <a className={styles.tiktok} href={social.tiktok} target="_blank" rel="noopener noreferrer">
          <Icon name="tiktok" size={18} />
          TikTok
        </a>
      </div>
    </div>
  );
}
