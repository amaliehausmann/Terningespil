import React, { useState } from 'react';
import Header from './components/Header/Header';
import Score from './components/Score/Score';
import styles from './components/Score/Score.module.scss';


function App() {
    const [playerScore, setPlayerScore] = useState(0);
    const [dealerScore, setDealerScore] = useState(0);
    return(
       <>
        <Header title="TerningSpil: Player vs Dealer" />
        <div className={styles.scoresWrapper}>
          <Score label="Player Score" score={playerScore} />
          <Score label="Dealer Score" score={dealerScore} />
        </div>
    </>
  );
}
    

export default App;
