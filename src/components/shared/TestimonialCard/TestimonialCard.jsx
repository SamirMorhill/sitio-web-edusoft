import ImagePlaceholder from '@/components/ui/ImagePlaceholder/ImagePlaceholder';
import styles from './TestimonialCard.module.css';

/** Testimonio de una institución. `institution` y `results` son opcionales. */
export default function TestimonialCard({ quote, author, institution, logo, results }) {
  return (
    <article className={styles.card}>
      <div className={styles.logo}>
        <ImagePlaceholder src={logo} alt={institution} label="LOGO INSTITUCIÓN" variant="striped" height={46} />
      </div>
      {institution && <h3 className={styles.institution}>{institution}</h3>}
      <blockquote className={styles.quote}>“{quote}”</blockquote>
      <small className={styles.author}>{author}</small>
      {results && (
        <dl className={styles.results}>
          {results.map((result) => (
            <div key={result.label}>
              <dt className={styles.resultValue}>{result.value}</dt>
              <dd className={styles.resultLabel}>{result.label}</dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}
