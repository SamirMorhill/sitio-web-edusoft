import ImagePlaceholder from '@/components/ui/ImagePlaceholder/ImagePlaceholder';
import styles from './TestimonialCard.module.css';

/**
 * Testimonio de una institución.
 * `compact`: versión resumida (Inicio) sin los resultados. El nombre de la institución solo se muestra como texto si no hay logo.
 */
export default function TestimonialCard({ quote, author, institution, logo, results, compact = false }) {
  return (
    <article className={styles.card}>
      <div className={styles.logo}>
        <ImagePlaceholder
          src={logo}
          alt={institution ? `Logo de ${institution}` : ''}
          label="LOGO INSTITUCIÓN"
          variant="striped"
          height={46}
          fit="contain"
          align="left"
        />
      </div>
      {!compact && !logo && institution && <h3 className={styles.institution}>{institution}</h3>}
      <blockquote className={styles.quote}>“{quote}”</blockquote>
      <small className={styles.author}>{author}</small>
      {!compact && results && (
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
