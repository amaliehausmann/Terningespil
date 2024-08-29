import React, { useState } from 'react';
import CustomModal from './components/WinModel/CustomModal';
import './App.scss'; 


function App() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isWinner, setIsWinner] = useState(true);
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <CustomModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                winnerMessage="Player Wins!" 
                loserMessage="You Lose!"
                isWinner={isWinner}
            />
        </>
    );
}

export default App;
