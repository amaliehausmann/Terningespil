import "./App.scss";
import { Modal } from "./components/Modal/Modal";
import { useState, useEffect } from "react";
import { Button } from "./components/Buttons/Button";
import { Dice } from "./components/Dice/Dice";
import { Header } from "./components/Header/Header";
import { Score } from "./components/Score/Score";
import { Rules } from "./components/Modal/ModalContent/rules";
import { EndMessage } from "./components/Modal/ModalContent/EndMessage";

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
      (selectedButton === "button3" && newValue2 > newValue1)
    ) {
      setPlayerScore((prevScore) => prevScore + 1);
    }
    else if (selectedButton === "button2" && newValue2 === newValue1) {
      setPlayerScore((prevScore) => prevScore + 2);
    } else {
      setDealerScore((prevScore) => prevScore + 1);
    }
  }

  // Win function
  const [endGameMsg, setEndGameMsg] = useState("");
  const [isEndModalOpen, setIsEndModalOpen] = useState(false);
  const [loseWinMsg, setLoseWinMsg] = useState("");

  function checkWinner() {
    if (playerScore >= 8) {
      setIsEndModalOpen(true);
      setEndGameMsg("Du Overlevede!");
      setLoseWinMsg(
        "Du vandt over Mafiabossen! Han sletter din gæld og du får lov at overleve!"
      );
    } else if (dealerScore >= 8) {
      setEndGameMsg("Huset vinder altid...");
      setIsEndModalOpen(true);
      setLoseWinMsg(
        "Du blev skudt! Du tabte til Mafiabossen og han dræbte dig og hele din familie."
      );
    }
  }

  useEffect(() => {
    checkWinner();
  }, [playerScore, dealerScore]);

  // reset game
  function resetGame() {
    setPlayerScore(0);
    setDealerScore(0);
    setIsEndModalOpen(false);
  }

  return (
    <>
      <Header title="Mafia Dice Duel"></Header>
      <div className="scoreDisplay">
        <Score label="Player" score={playerScore}></Score>
        <Score label="Mafia Boss" score={dealerScore}></Score>
      </div>
      <Button
        action={openModal}
        buttonStyle="helpButton"
        buttonTitle="?"
      ></Button>
      {isModalOpen && (
        <Modal
          title="spil regler"
          closeModal={closeModal}
          modalStyle="ruleModal"
          buttonName="X"
        >
          <Rules></Rules>
        </Modal>
      )}

      {isEndModalOpen && (
        <Modal
          modalStyle="endGame"
          title={endGameMsg}
          closeModal={resetGame}
          buttonName="Play Again"
        >
          {" "}
          <EndMessage msg={loseWinMsg}></EndMessage>
        </Modal>
      )}

      <div className="dices">
        <Dice diceValue={diceValue1}></Dice>
        <Dice diceValue={diceValue2}></Dice>
      </div>
      <div className="selectionButtons">
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
      </div>
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
