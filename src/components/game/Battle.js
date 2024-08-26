import { useUser } from '../../context/UserContext';
import { formatDoubleDigit } from '../../utils/utils';
import './Battle.css';

function Battle(props) {
    const { currentTask } = useUser();

    return (
        <div className='battle'>
            <h2>{currentTask.taskName}</h2>
            <div id='health-bar'>
                <div id='health' style={{ width: "100" }}></div>
            </div>
            <img src={require('../../assets/slime.gif')} alt='animation of a slime being attacked' className='slime'></img>
            <div className='timer'>{formatDoubleDigit(props.hours)}:{formatDoubleDigit(props.minutes)}:{formatDoubleDigit(props.seconds)}</div>
            <button onClick={props.handleStop} className='battle-stop'>Stop</button>
        </div>
    );
}

export default Battle;