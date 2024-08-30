import style from "../Header/Header.module.scss";

export function Header({ title }) {
  return (
    <div className={style.header}>
      <h1>{title}</h1>
    </div>
  );
}
