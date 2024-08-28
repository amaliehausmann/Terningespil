import style from "./Button.module.scss";

export function Button({ action, buttonStyle, buttonTitle }) {
  return (
    <>
      <button onClick={action} className={`${style[buttonStyle]}`}>
        {buttonTitle}
      </button>
    </>
  );
}
