import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import useWebSocket from '../../hooks/useWebSocket';
import { formatDoubleDigit, formatTime } from '../../utils/utils';
import './Battle.css';

function Battle(props) {
    const { currentTask } = useUser();
    const [time, setTime] = useState({hours: 0, minutes: 0, seconds: 0});
    const [connectionText, setConnextionText] = useState("Connecting...");
    const { messages, isConnected, closeConnection } = useWebSocket(`${process.env.REACT_APP_SERVER_URL}/game`);

    useEffect(() => {
        setTime(formatTime(props.game.remainingTime));
      }, []);

      useEffect(() => {
        if (isConnected) setConnextionText("Game Finished.");
      }, [isConnected]);

      useEffect(() => {
        if (!isConnected) return;

        const timer = setInterval(() => {
            setTime(prevTime => {
                const { hours, minutes, seconds } = prevTime;

                if (hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(timer);
                    return prevTime;
                }

                let newHours = hours;
                let newMinutes = minutes;
                let newSeconds = seconds - 1;

                if (newSeconds < 0) {
                    newSeconds = 59;
                    newMinutes -= 1;
                }
                if (newMinutes < 0) {
                    newMinutes = 59;
                    newHours -= 1;
                }

                return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isConnected]);

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
                    <div className='timer'>{formatDoubleDigit(time.hours)}:{formatDoubleDigit(time.minutes)}:{formatDoubleDigit(time.seconds)}</div>
                    <button onClick={handleStop} className='battle-stop'>Stop</button>
                </>)
                :
                (
                    <div className='disconnected'>
                        <p className='disconnected-message'>{connectionText}</p>
                        <button onClick={props.handleStop} className='battle-stop'>Back</button>
                    </div>
                )
            }
        </div>
    );
}

export default Battle;