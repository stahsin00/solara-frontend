import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

function World() {
    const { currentTask, setCurrentTask } = useUser();
    const [isBattling, setIsBattling] = useState(false);

    function handleClick() {
        setCurrentTask(null);
    }

    async function battle() {

    }

  return (
    <main className="world">
        <div className='current-location'>Current Location: Solara Outskirts</div>
        {(!isBattling) ? 
        (
          <div className='set-timer'>
            <form>
              <input type='number' name='hours' min='0' /> Hours
              <input type='number' name='minutes' min='0' max='59' /> Minutes
            </form>
            <div className='set-timer-buttons'>
              <button onClick={() => {setIsBattling(true)}} className='set-timer-start'>Start</button>
              <button onClick={handleClick} className='set-timer-cancel'>Cancel</button>
            </div>
          </div>
        ) 
        : 
        (
          <div className='battle'>
            <h2>{currentTask.taskName}</h2>
            <div id='health-bar'>
                <div id='health'></div>
            </div>
            <img src={require('../slime.gif')} alt='animation of a slime being attacked'></img>
            <div className='timer'>00:00:00</div>
            <button onClick={() => {setIsBattling(false)}} className='battle-stop'>Stop</button>
          </div>
        )}
    </main>
  );
}

export default World;