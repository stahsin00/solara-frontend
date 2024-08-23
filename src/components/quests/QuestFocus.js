import React, {useState} from 'react';
import { useUser } from '../../context/UserContext';
import { questDelete } from '../../utils/quest';
import './QuestFocus.css';

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

      try {
        await questDelete(userId, props.selectedTask._id);
        setError(null);
        props.setSelectedTask(null);
        setTasksChanged(!tasksChanged);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
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