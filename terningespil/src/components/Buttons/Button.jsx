import style from "./Button.module.scss";

export function Button({
  action,
  buttonStyle,
  buttonTitle,
  isSelected,
  isDisabled,
}) {
  return (
    <>
      <button
        onClick={action}
        className={`${style[buttonStyle]} ${isSelected ? style.selected : ""}`}
        disabled={isDisabled}
      >
        {buttonTitle}
      </button>
    </>
  );
}
