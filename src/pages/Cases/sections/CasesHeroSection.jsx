import { PATHS } from '@/app/paths';
import { casesHero } from '@/data/heroes';
import { featuredTestimonial, successCases } from '@/data/testimonials';
import Button from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import FullBleedHero from '@/components/shared/FullBleedHero/FullBleedHero';
import styles from './CasesHeroSection.module.css';

/** Hero de Casos de éxito: testimonio destacado con los resultados principales de cada institución. */
export default function CasesHeroSection() {
  return (
    <FullBleedHero
      content={casesHero}
      scrollTarget="casos"
      actions={
        <>
          <Button href="#casos">Ver los casos</Button>
          <Button to={PATHS.contact} variant="ghost">
            Hablemos
          </Button>
        </>
      }
      visual={
        <div className={styles.scene}>
          <figure className={styles.quote}>
            <span className={styles.quoteIcon}>
              <Icon name="chat" size={20} />
            </span>
            <blockquote>“{successCases[0].quote}”</blockquote>
            <figcaption>{featuredTestimonial.author}</figcaption>
          </figure>

          <ul className={styles.metrics}>
            {successCases.map((item) => {
              const [result] = item.results;
              return (
                <li key={item.institution} className={styles.metric}>
                  {item.logo && <img src={item.logo} alt={item.institution} className={styles.logo} />}
                  <span className={styles.value}>{result.value}</span>
                  <span className={styles.label}>{result.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      }
    />
  );
}
