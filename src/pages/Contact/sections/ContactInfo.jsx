import { company } from '@/data/company';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import Icon from '@/components/ui/Icon/Icon';
import SmartLink from '@/components/ui/SmartLink/SmartLink';
import styles from './ContactInfo.module.css';

export default function ContactInfo() {
  const { contact, social, location } = company;

  const items = [
    { icon: 'mapPin', label: location },
    { icon: 'mail', label: contact.email, href: `mailto:${contact.email}` },
    { icon: 'phone', label: `WhatsApp: ${contact.whatsapp}`, href: contact.whatsappUrl },
  ];

  return (
    <div data-reveal="left">
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
            {item.href ? <SmartLink href={item.href}>{item.label}</SmartLink> : item.label}
          </li>
        ))}
      </ul>

      <div className={styles.hours}>
        <b>Horario de atención</b>
        {contact.hours}
      </div>

      <div className={styles.social}>
        <SmartLink className={styles.instagram} href={social.instagram}>
          <Icon name="instagram" size={18} />
          Instagram
        </SmartLink>
        <SmartLink className={styles.tiktok} href={social.tiktok}>
          <Icon name="tiktok" size={18} />
          TikTok
        </SmartLink>
      </div>
    </div>
  );
}
