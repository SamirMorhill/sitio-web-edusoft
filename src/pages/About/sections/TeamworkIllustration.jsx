import Icon from '@/components/ui/Icon/Icon';
import styles from './TeamworkIllustration.module.css';

const STEPS = [
  { label: 'Análisis', state: 'done' },
  { label: 'Diseño', state: 'done' },
  { label: 'Desarrollo', state: 'current' },
];

/**
 * Ilustración genérica de trabajo en equipo (sin fotos):
 * un tablero de proyecto con las etapas análisis, diseño y desarrollo,
 * rodeado por tarjetas flotantes que representan a cada área.
 */
export default function TeamworkIllustration() {
  return (
    <div className={styles.scene} role="img" aria-label="Ilustración de un equipo trabajando en un proyecto educativo">
      {/* Tablero central */}
      <div className={styles.board}>
        <div className={styles.boardHeader}>
          <span className={styles.boardIcon}>
            <Icon name="building" size={18} />
          </span>
          <div>
            <b>Proyecto en curso</b>
            <small>Plataforma para una institución educativa</small>
          </div>
        </div>

        <ol className={styles.steps}>
          {STEPS.map((step) => (
            <li key={step.label} className={styles[step.state]}>
              <span className={styles.dot}>{step.state === 'done' && <Icon name="check" size={12} />}</span>
              {step.label}
            </li>
          ))}
        </ol>

        <div className={styles.progress}>
          <span />
        </div>

        <div className={styles.bars} aria-hidden="true">
          {[40, 65, 52, 80, 70, 92].map((height, index) => (
            <i key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>

      {/* Tarjetas flotantes por área */}
      <div className={`${styles.chip} ${styles.chipAnalysis}`}>
        <span className={styles.chipIcon}>
          <Icon name="file" size={18} />
        </span>
        <div>
          <b>Análisis</b>
          <small>Relevamos cada necesidad</small>
        </div>
      </div>

      <div className={`${styles.chip} ${styles.chipDesign}`}>
        <span className={styles.chipIcon}>
          <Icon name="eye" size={18} />
        </span>
        <div>
          <b>Diseño</b>
          <span className={styles.swatches} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>

      <div className={`${styles.chip} ${styles.chipDev}`}>
        <span className={styles.chipIcon}>
          <Icon name="zap" size={18} />
        </span>
        <div>
          <b>Desarrollo</b>
          <span className={styles.code} aria-hidden="true">
            <i />
            <i />
          </span>
        </div>
      </div>

      <div className={styles.teamBadge}>
        <span className={styles.avatars} aria-hidden="true">
          <i>
            <Icon name="user" size={16} />
          </i>
          <i>
            <Icon name="user" size={16} />
          </i>
          <i>
            <Icon name="user" size={16} />
          </i>
        </span>
        <small>Trabajo en equipo</small>
      </div>
    </div>
  );
}
