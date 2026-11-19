import Icon from '@/components/ui/Icon/Icon';
import styles from './Avatar.module.css';

/** Foto circular. Si no hay foto muestra un ícono de usuario. */
export default function Avatar({ photo, alt = '', size = 120, tone = 'light' }) {
  return (
    <div className={`${styles.avatar} ${styles[tone]}`} style={{ width: size, height: size }}>
      {photo ? <img src={photo} alt={alt} /> : <Icon name="user" size={size * 0.4} />}
    </div>
  );
}
