import './SetTimer.css';
import { useUser } from '../../context/UserContext';

function SetTimer(props) {
    const { setCurrentTask } = useUser();

    return (
        <div className='set-timer'>
            <form>
              <input type='number' name='hours' min='0' max='24' value={props.hours} onChange={(e) => props.setHours(e.target.value)}/> Hours
              <input type='number' name='minutes' min='0' max='59' value={props.minutes} onChange={(e) => props.setMinutes(e.target.value)}/> Minutes
            </form>
            <div className='rewards-earned-so-far'>{props.reward}<img src={require('../../assets/coin.png')} alt='a coin' /> earned so far.</div>
            <div className='set-timer-buttons'>
              <button onClick={props.handleStart} className='set-timer-start'>Start</button>
              <button onClick={() => setCurrentTask(null)} className='set-timer-cancel'>Back</button>
            </div>
        </div>
    );
}

export default SetTimer;