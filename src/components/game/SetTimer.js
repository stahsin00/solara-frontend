import { useState } from 'react';
import './SetTimer.css';
import { useUser } from '../../context/UserContext';
import { gameCreate } from '../../utils/game';

function SetTimer(props) {
    const { currentTask, setCurrentTask } = useUser();
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(30);

    const handleStart = async () => {
      const game = await gameCreate(hours, minutes, currentTask.id);
      props.setGame(game);
      props.handleStart();
    }

    return (
        <div className='set-timer'>
            <form>
              <input type='number' name='hours' min='0' max='24' value={hours} onChange={(e) => setHours(e.target.value)}/> Hours
              <input type='number' name='minutes' min='0' max='59' value={minutes} onChange={(e) => setMinutes(e.target.value)}/> Minutes
            </form>
            <div className='rewards-earned-so-far'>{0}<img src={require('../../assets/coin.png')} alt='a coin' /> earned so far.</div>
            <div className='set-timer-buttons'>
              <button onClick={handleStart} className='set-timer-start'>Start</button>
              <button onClick={() => setCurrentTask(null)} className='set-timer-cancel'>Back</button>
            </div>
        </div>
    );
}

export default SetTimer;