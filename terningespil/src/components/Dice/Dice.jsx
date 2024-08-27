import "./Dice.scss";

export function Dice({ diceValue }) {
  return (
    <div className={`dice dice-${diceValue}`}>
      <div className="diceStyle face-1"></div>
      <div className="diceStyle face-2"></div>
      <div className="diceStyle face-3"></div>
      <div className="diceStyle face-4"></div>
      <div className="diceStyle face-5"></div>
      <div className="diceStyle face-6"></div>
      <div className="diceStyle face-7"></div>
      <div className="diceStyle face-8"></div>
      <div className="diceStyle face-9"></div>
    </div>
  );
}
