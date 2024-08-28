import styles from '../Header/Header.module.scss';

export function Header({ title }) {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
    </div>
  );
}

