import React, {useState} from 'react';
import { useUser } from '../context/UserContext';

function QuestFocus(props) {
  const { userId, setCurrentTask, tasksChanged, setTasksChanged } = useUser();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  let taskName = "No Task Selected";
  let description = "Please Select a Task.";
  let difficulty = "";

  if (props.selectedTask) {
    taskName = props.selectedTask.taskName;
    description = props.selectedTask.description
    difficulty = props.selectedTask.difficulty
  }

  // delete task
  async function handleDelete() {
    if (props.selectedTask && !loading) {
      setLoading(true);
      const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/${userId}/${props.selectedTask._id}`;

      const response = await fetch(apiUrl, {
          method: 'DELETE',
          headers: {
          'Content-Type': 'application/json',
          },
      });

      if (response.ok) {
        setError(null);
        setLoading(false);
        props.setSelectedTask(null);
        setTasksChanged(!tasksChanged);
      } else {
        const {message} = await response.json();
        setLoading(false);
        setError(message);
      }
    }
  }

  // start game world
  function handleClick() {
    if (props.selectedTask) {
      setCurrentTask(props.selectedTask);
    }
  }

  return (
    <div className="quest-focus">
        <div className='focus quest-focus-main'>
            <h2>{taskName}</h2>
            <div className={`difficulty-text-${difficulty}`}>{difficulty}</div>
            <hr />
            <div className='description'>
                {description}
            </div>
            {(!props.selectedTask) ? <></> :
            (<div>
              {error ? (<div className='error-message'>{error}</div>) : <></>}
              <button className='button-type-light delete-button' onClick={handleDelete}>Delete</button>
              <button onClick={handleClick} id='start-button'>Start</button>
            </div>)
            }
        </div>
    </div>
  );
}

export default QuestFocus;