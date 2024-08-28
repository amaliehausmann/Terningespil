import styles from '../Score/Score.module.scss';

export function Score({ label, score }) {
  return (
    <div className={styles.score}>
      <span>{label}: {score}</span>
    </div>
  );
}


