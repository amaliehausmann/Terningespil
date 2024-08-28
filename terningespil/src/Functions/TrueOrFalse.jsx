import React, { useState } from 'react';

export function DiceGame() {
    const [playerScore, setPlayerScore] = useState(0);
    const [dealerScore, setDealerScore] = useState(0);
    const [diceValue, setDiceValue] = useState(null);
    const [secondDice, setSecondDice] = useState(null);
    const [playerChoice, setPlayerChoice] = useState(null);

    const handleChoice = (choice) => {
        setPlayerChoice(choice);
    };

    const handleRollDice = () => {
        const newDiceValue = Math.floor(Math.random() * 6) + 1;
        const secondDiceValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(newDiceValue);
        setSecondDice(secondDiceValue);
        
        if (
            (playerChoice === 'higher' && newDiceValue > secondDiceValue) ||
            (playerChoice === 'equal' && newDiceValue === secondDiceValue) ||
            (playerChoice === 'lower' && newDiceValue < secondDiceValue)
        ) {
            setPlayerScore(playerScore + 1);
        } else {
            setDealerScore(dealerScore + 1);
        }
    };

}

