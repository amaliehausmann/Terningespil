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
        className={`${buttonStyle} ${isSelected ? style.selected : ""}`}
        disabled={isDisabled}
      >
        {buttonTitle}
      </button>
    </>
  );
}
