import styles from './DashboardPreview.module.css';

const DEFAULT_KPIS = [
  { value: '94%', label: 'Asistencia' },
  { value: '8,2', label: 'Promedio' },
  { value: '12', label: 'Tareas activas' },
];

const BAR_HEIGHTS = [45, 70, 55, 85, 60, 92, 75];

/**
 * Ilustración de un panel de la plataforma.
 * TODO: reemplazar por una captura real de la aplicación cuando esté disponible.
 */
export default function DashboardPreview({ kpis = DEFAULT_KPIS, showChart = true, rows = [90, 70, 80] }) {
  return (
    <div className={styles.body} aria-hidden="true">
      <div className={styles.sidebar}>
        <div className={styles.active} />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className={styles.main}>
        <div className={styles.kpis}>
          {kpis.map((kpi) => (
            <div key={kpi.label} className={styles.kpi}>
              <b>{kpi.value}</b>
              <small>{kpi.label}</small>
            </div>
          ))}
        </div>
        {showChart && (
          <div className={styles.bars}>
            {BAR_HEIGHTS.map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        )}
        <div className={styles.rows}>
          {rows.map((width, index) => (
            <div key={index} style={{ width: `${width}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
