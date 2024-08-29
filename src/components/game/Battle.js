import { useUser } from '../../context/UserContext';
import useWebSocket from '../../hooks/useWebSocket';
import { formatDoubleDigit } from '../../utils/utils';
import './Battle.css';

function Battle(props) {
    const { currentTask } = useUser();
    const { messages, isConnected, closeConnection } = useWebSocket(`${process.env.REACT_APP_SERVER_URL}/game/${props.game.id}`);

    const handleStop = () => {
        closeConnection();
        props.handleStop();
    }

    return (
        <div className='battle'>
            { isConnected ?
                (<>
                    <h2>{currentTask.name}</h2>
                    <img src={require('../../assets/slime.gif')} alt='animation of a slime being attacked' className='slime'></img>
                    <div className='timer'>{formatDoubleDigit(0)}:{formatDoubleDigit(0)}:{formatDoubleDigit(0)}</div>
                    <button onClick={handleStop} className='battle-stop'>Stop</button>
                </>)
                :
                (
                    <div>
                        <div>Not Connected to Server.</div>
                        <button onClick={props.handleStop} className='battle-stop'>Stop</button>
                    </div>
                )
            }
        </div>
    );
}

export default Battle;