import Button from '@/components/ui/Button/Button';
import styles from './CtaBanner.module.css';

/** Banner de llamada a la acción al final de las páginas. */
export default function CtaBanner({ title, text, buttonLabel, to }) {
  return (
    <section className="section section--flush-top">
      <div className="container">
        <div className={styles.banner} data-reveal="zoom">
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>
          <Button to={to} variant="white">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
