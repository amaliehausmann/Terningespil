import "./App.scss";
import { Modal } from "./components/Modal/Modal";
import { useState } from "react";
import { Button } from "./components/Buttons/Button";
import { Dice } from "./components/Dice/Dice";

function App() {

  const [diceValue1, setDiceValue1] = useState(1);
  const [diceValue2, setDiceValue2] = useState(1);

  function rollDice1() {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue1(newValue);
  }

  function rollDice2() {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue2(newValue);
  }

  function rollAllDice(){
    rollDice1();
    rollDice2();
  }

  return (
    <>
    <Dice diceValue={diceValue1}></Dice>
    <Dice diceValue={diceValue2}></Dice>
    {/* <Button action={rollAllDice} buttonStyle='lower' buttonTitle='Lower' ></Button>
    <Button action={rollAllDice} buttonStyle='equal' buttonTitle='Equal to' ></Button>
    <Button action={rollAllDice} buttonStyle='higher' buttonTitle='Higher' ></Button> */}
    <Button action={rollAllDice} buttonStyle='rollDice' buttonTitle='Roll the Dice'></Button>
    </>
  );
}

export default App;
