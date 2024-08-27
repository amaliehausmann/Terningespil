import styles from '../Header/Header.module.scss';

function Header({ title }) {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
