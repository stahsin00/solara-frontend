import React, { useState } from 'react';
import SetTimer from '../components/game/SetTimer';
import Battle from '../components/game/Battle';
import './Game.css';

function Game() {
  const [isBattling, setIsBattling] = useState(false);
  const [game, setGame] = useState();

  return (
    <div className="world">
        <div className='current-location'>Current Location: Solara Outskirts</div>
        {(!isBattling) ? 
        (
          <SetTimer handleStart={() => setIsBattling(true)} setGame={setGame} game={game}/>
        ) 
        : 
        (
          <Battle handleStop={() => {setIsBattling(false)}} game={game}/>
        )}
    </div>
  );
}

export default Game;