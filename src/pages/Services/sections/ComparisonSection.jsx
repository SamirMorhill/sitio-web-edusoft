import { services, serviceComparison } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import Icon from '@/components/ui/Icon/Icon';
import styles from './ComparisonSection.module.css';

export default function ComparisonSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading badge="Comparativa" title="¿Qué incluye cada plataforma?" />
        <div className={styles.wrapper} data-reveal>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Funcionalidad</th>
                {services.map((service) => (
                  <th key={service.id} scope="col" className={styles.center}>
                    {service.shortName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {serviceComparison.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  {row.included.map((included, index) => (
                    <td key={index} className={`${styles.center} ${included ? styles.yes : styles.no}`}>
                      {included ? <Icon name="check" size={18} title="Incluido" /> : <span aria-label="No incluido">—</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
