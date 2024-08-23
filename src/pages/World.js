import React, { useState, useEffect, useRef } from 'react';
import { useUser } from '../context/UserContext';
import { worldInfo, worldStart, worldStop } from '../utils/world';
import { formatDoubleDigit } from '../utils/utils';
import './World.css';

function World() {
  const { currentTask, setCurrentTask } = useUser();
  const [isBattling, setIsBattling] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [healthBarWidth, setHealthBarWidth] = useState(100);
  const [reward, setReward] = useState(0);

  function handleClick() {
      setCurrentTask(null);
  }

  const handleStart = async () => {
    try {
      await worldStart(hours, minutes);
      setIsBattling(true);
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleStop = async () => {
    try {
      const result = await worldStop();

      setReward(result.reward);
      setIsBattling(false);
    } catch (e) {
      console.error(e.message);
    }
  };

  // TODO: i forgot how this part works lol
  const fetchGameInfo = async () => {
    if (!isBattling) {
      return;
    }

    try {
      const result = await worldInfo();

        if (!result.world.gameOn) {
            handleStop();
        } else {
          setHours(result.world.hours);
          setMinutes(result.world.minutes);
          setSeconds(result.world.seconds);
          setHealthBarWidth((result.world.enemyHealth / result.world.enemyMaxHealth) * 100);
        }
    } catch (e) {
      console.error(e.message);
    }
  };
  
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isBattling) {
      intervalRef.current = setInterval(fetchGameInfo, 1000);

      return () => clearInterval(intervalRef.current);
    }
  }, [isBattling]);

  return (
    <div className="world">
        <div className='current-location'>Current Location: Solara Outskirts</div>
        {(!isBattling) ? 
        (
          <div className='set-timer'>
            <form>
              <input type='number' name='hours' min='0' max='24' value={hours} onChange={(e) => setHours(e.target.value)}/> Hours
              <input type='number' name='minutes' min='0' max='59' value={minutes} onChange={(e) => setMinutes(e.target.value)}/> Minutes
            </form>
            <div className='rewards-earned-so-far'>{reward}<img src={require('../coin.png')} alt='a coin' /> earned so far.</div>
            <div className='set-timer-buttons'>
              <button onClick={handleStart} className='set-timer-start'>Start</button>
              <button onClick={handleClick} className='set-timer-cancel'>Back</button>
            </div>
          </div>
        ) 
        : 
        (
          <div className='battle'>
            <h2>{currentTask.taskName}</h2>
            <div id='health-bar'>
                <div id='health' style={{ width: `${healthBarWidth}%` }}></div>
            </div>
            <img src={require('../slime.gif')} alt='animation of a slime being attacked' className='slime'></img>
            <div className='timer'>{formatDoubleDigit(hours)}:{formatDoubleDigit(minutes)}:{formatDoubleDigit(seconds)}</div>
            <button onClick={handleStop} className='battle-stop'>Stop</button>
          </div>
        )}
    </div>
  );
}

export default World;