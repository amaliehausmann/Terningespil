import styles from '../Score/Score.module.scss';

function Score({ label, score }) {
  return (
    <div className={styles.score}>
      <span>{label}: {score}</span>
    </div>
  );
}

export default Score;
