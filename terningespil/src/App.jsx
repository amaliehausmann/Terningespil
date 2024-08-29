import "./App.scss";
import React, { useState } from 'react';
import { WinFunction } from "./components/WinModel/WinFunctionl";
function App() {
    const [playerScore, setPlayerScore] = useState(0);
    const [dealerScore, setDealerScore] = useState(0);

    return (
        <>
            <WinFunction
                playerScore={playerScore}
                dealerScore={dealerScore}
                setPlayerScore={setPlayerScore}
                setDealerScore={setDealerScore}
            />
          
        </>
    );
}

export default App;
