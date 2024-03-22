import React, { useState, useEffect, useRef } from 'react';
import { useUser } from '../context/UserContext';

function World() {
    const { userId, currentTask, setCurrentTask } = useUser();
    const [isBattling, setIsBattling] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [healthBarWidth, setHealthBarWidth] = useState(100);
    const [reward, setReward] = useState(0);

    function formatTime(value) {
      return value < 10 ? `0${value}` : value;
    }

    function handleClick() {
        setCurrentTask(null);
    }

    const fetchGameInfo = async () => {
      if (!isBattling) {
        return;
      }

      try {
        const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/gameinfo/${userId}`;
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
              const result = await response.json();
              if (!result.world.gameOn) {
                stopGame();
              }
              setHours(result.world.hours);
              setMinutes(result.world.minutes);
              setSeconds(result.world.seconds);
              setHealthBarWidth((result.world.enemyHealth / result.world.enemyMaxHealth) * 100)
          } else {
              console.error('Failed to fetch game info:', response.statusText);
          }
      } catch (error) {
          console.error('Error fetching game info:', error.message);
      }
  };

  const startGame = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/startgame/${userId}`;
      const data = {hours: hours, minutes: minutes};
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
            console.error('Failed to fetch game info:', response.statusText);
        } else {
          setIsBattling(true);
          const result = await response.json();
        }
    } catch (error) {
        console.error('Error fetching game info:', error.message);
    }
};

const stopGame = async () => {
  try {
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/stopgame/${userId}`;
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
          console.error('Failed to fetch game info:', response.statusText);
      } else {
        const result = await response.json();
        setReward(result.reward);
        setIsBattling(false);
      }
  } catch (error) {
      console.error('Error fetching game info:', error.message);
  }
};

const intervalRef = useRef(null);

useEffect(() => {
  if (isBattling) {
    intervalRef.current = setInterval(fetchGameInfo, 1000);

    return () => clearInterval(intervalRef.current);
  }
}, [userId, isBattling]);

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
              <button onClick={startGame} className='set-timer-start'>Start</button>
              <button onClick={handleClick} className='set-timer-cancel'>Cancel</button>
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
            <div className='timer'>{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</div>
            <button onClick={stopGame} className='battle-stop'>Stop</button>
          </div>
        )}
    </div>
  );
}

export default World;