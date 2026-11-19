import { featuredTestimonial } from '@/data/testimonials';
import Avatar from '@/components/ui/Avatar/Avatar';
import styles from './FeaturedTestimonial.module.css';

export default function FeaturedTestimonial() {
  const { quote, author, role, photo } = featuredTestimonial;

  return (
    <figure className={styles.card}>
      <Avatar photo={photo} alt={author} tone="dark" />
      <div>
        <blockquote className={styles.quote}>“{quote}”</blockquote>
        <figcaption className={styles.caption}>
          {author} · {role}
        </figcaption>
      </div>
    </figure>
  );
}
