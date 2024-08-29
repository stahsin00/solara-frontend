import React, {useState, useEffect} from 'react';
import { useUser } from '../../context/UserContext';
import { questDelete } from '../../utils/quest';
import './QuestFocus.css';

function QuestFocus(props) {
  const { setCurrentTask, tasksChanged, setTasksChanged } = useUser();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const [taskName, setTaskName] = useState("No Quest Selected");
  const [description, setDescription] = useState("Please Select a Quest.");
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    if (props.selectedTask) {
      setTaskName(props.selectedTask.name);
      setDescription(props.selectedTask.description)
      switch (props.selectedTask.difficulty) {
        case 1:
          setDifficulty("Easy");
          break;
        case 2:
          setDifficulty("Medium");
          break;
        case 3:
          setDifficulty("Hard");
          break;
        default:
          setDifficulty("");
          break;
      }
    } else {
      setTaskName("No Quest Selected");
      setDescription("Please Select a Quest.")
      setDifficulty("");
    }
  }, [props.selectedTask]);

  // delete task
  async function handleDelete() {
    if (props.selectedTask && !loading) {
      setLoading(true);

      try {
        await questDelete(props.selectedTask.id);
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