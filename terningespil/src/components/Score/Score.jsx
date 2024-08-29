import styles from "./Score.module.scss";

export function Score({ label, score }) {
  return (
    <div className={styles.scoresWrapper}>
      <span>
        {label}: {score}
      </span>
    </div>
  );
}
