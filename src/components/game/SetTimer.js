import { useState } from 'react';
import './SetTimer.css';
import { useUser } from '../../context/UserContext';
import { gameCreate, gameDelete } from '../../utils/game';
import Spinner from '../Spinner';

function SetTimer(props) {
    const { currentTask, setCurrentTask } = useUser();
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(30);
    const [starting, setStarting] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const handleStart = async () => {
      if (starting || deleting) return;
      setStarting(true);
      const game = await gameCreate(hours, minutes, currentTask.id);
      setStarting(false);
      props.setGame(game);
      props.handleStart();
    }

    const handleBack = async () => {
      if (starting || deleting) return;
      setDeleting(true);
      if (props.game) {
        await gameDelete();
      }
      setDeleting(false);
      setCurrentTask(null);
    }

    return (
        <div className='set-timer'>
            <form>
              <input type='number' name='hours' min='0' max='24' value={hours} onChange={(e) => setHours(Number(e.target.value))}/> Hours
              <input type='number' name='minutes' min='0' max='59' value={minutes} onChange={(e) => setMinutes(Number(e.target.value))}/> Minutes
            </form>
            <div className='rewards-earned-so-far'>{0}<img src={require('../../assets/coin.png')} alt='a coin' /> earned so far.</div>
            <div className='set-timer-buttons'>
              <button onClick={handleStart} className='set-timer-start'>
                { starting ?
                  <div className='centered-spinner'><Spinner /></div>
                  :
                  'Start'
                }
              </button>
              <button onClick={handleBack} className='set-timer-cancel'>
                { deleting ?
                  <div className='centered-spinner'><Spinner /></div>
                  :
                  'Back'
                }
              </button>
            </div>
        </div>
    );
}

export default SetTimer;