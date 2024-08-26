import React, { useState, useEffect, useRef } from 'react';
import SetTimer from '../components/game/SetTimer';
import Battle from '../components/game/Battle';
import './World.css';

function World() {
  const [isBattling, setIsBattling] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [reward, setReward] = useState(0);

  const handleStart = async () => {
    try {
      setTimeout(() => {
        setIsBattling(true);
      }, 1000);
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleStop = async () => {
    try {
      setTimeout(() => {
        setReward(100);
        setIsBattling(false);
      }, 1000);
    } catch (e) {
      console.error(e.message);
    }
  };

  // TODO: i forgot how this part works lol
  const fetchGameInfo = async () => {
    console.log("ew long polling");
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
          <SetTimer reward={reward} setHours={setHours} setMinutes={setMinutes} hours={hours} minutes={minutes} handleStart={handleStart}/>
        ) 
        : 
        (
          <Battle hours={hours} minutes={minutes} seconds={seconds} handleStop={handleStop}/>
        )}
    </div>
  );
}

export default World;