import "./App.scss";
import { Modal } from "./components/Modal/Modal";
import { useState } from "react";
import { Button } from "./components/Buttons/Button";
import { Dice } from "./components/Dice/Dice";
import { Header } from "./components/Header/Header";
import { Score } from "./components/Score/Score";
import { Rules } from "./components/Modal/ModalContent/rules";

function App() {
  // Modal function
  const [isModalOpen, setIsModalOpen] = useState(true);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  // Select bet
  const [selectedButton, setSelectedButton] = useState(null);

  function handleSelection(Button) {
    setSelectedButton(Button);
  }

  // Roll dice function
  const [diceValue1, setDiceValue1] = useState(1);
  const [diceValue2, setDiceValue2] = useState(5);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  function rollAllDice() {
    const newValue1 = Math.floor(Math.random() * 6) + 1;
    const newValue2 = Math.floor(Math.random() * 6) + 1;
    setDiceValue1(newValue1);
    setDiceValue2(newValue2);

    if (
      (selectedButton === "button1" && newValue2 < newValue1) ||
      (selectedButton === "button2" && newValue2 === newValue1) ||
      (selectedButton === "button3" && newValue2 > newValue1)
    ) {
      setPlayerScore((prevScore) => prevScore + 1);
    } else {
      setDealerScore((prevScore) => prevScore + 1);
    }
  }

  return (
    <>
      <Header title="Mafia Dice Duel"></Header>
      <div className="scoreDisplay">
      <Score label="Player" score={playerScore}></Score>
      <Score label="Dealer" score={dealerScore}></Score>
      </div>
      <Button action={openModal} buttonStyle="helpButton" buttonTitle="?"></Button>
      {isModalOpen && (
        <Modal title="spil regler" closeModal={closeModal}> <Rules></Rules></Modal>
      )}

      <Dice diceValue={diceValue1}></Dice>
      <Dice diceValue={diceValue2}></Dice>

      <Button
        action={() => handleSelection("button1")}
        buttonStyle="lower"
        buttonTitle="Lower"
        isSelected={selectedButton === "button1"}
      ></Button>
      <Button
        action={() => handleSelection("button2")}
        buttonStyle="equal"
        buttonTitle="Equal To"
        isSelected={selectedButton === "button2"}
      ></Button>
      <Button
        action={() => handleSelection("button3")}
        buttonStyle="higher"
        buttonTitle="Higher"
        isSelected={selectedButton === "button3"}
      ></Button>
      <Button
        action={rollAllDice}
        buttonStyle="rollDice"
        buttonTitle="Roll Dice"
        isDisabled={selectedButton == null}
      ></Button>
    </>
  );
}

export default App;
