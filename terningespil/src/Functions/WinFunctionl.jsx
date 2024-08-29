import React, { useState, useEffect } from 'react';
import {CustomModal} from './CustomModal';


export function WinFunction({ playerScore, dealerScore, setPlayerScore, setDealerScore }) {
    const [winnerMessage, setWinnerMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const checkWinner = () => {
        console.log('Checking winner...'); 
        if (playerScore >= 5) {  
            setWinnerMessage('You win!');
            setIsModalOpen(true);
        } else if (dealerScore >= 5) {      
            setWinnerMessage('You lose!');
            setIsModalOpen(true);
        }
    };

    useEffect(() => {
        checkWinner();
    }, [playerScore, dealerScore]);

    const resetGame = () => {
        console.log('Resetting game...');
        setPlayerScore(0);
        setDealerScore(0);
        setIsModalOpen(false);
    };

    return (
        <>
            {isModalOpen && (
                <CustomModal
                    isOpen={isModalOpen}
                    onClose={resetGame}
                    winnerMessage={winnerMessage}
                />
            )}
        </>
    );
}
