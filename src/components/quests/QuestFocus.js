import React, {useState, useEffect} from 'react';
import { useUser } from '../../context/UserContext';
import { questDelete } from '../../utils/quest';
import './QuestFocus.css';
import Spinner from '../Spinner';

function QuestFocus(props) {
  const { setCurrentTask, tasksChanged, setTasksChanged } = useUser();
  const [deleting, setDeleting] = useState();
  const [error, setError] = useState();

  const [taskName, setTaskName] = useState("No Quests.");
  const [description, setDescription] = useState("");
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
      setTaskName("No Quests.");
      setDescription("")
      setDifficulty("");
    }
  }, [props.selectedTask]);

  // delete task
  async function handleDelete() {
    if (props.selectedTask && !deleting) {
      setDeleting(true);

      try {
        await questDelete(props.selectedTask.id);
        setError(null);
        props.setSelectedTask(null);
        setTasksChanged(!tasksChanged);
      } catch (e) {
        setError(e.message);
      } finally {
        setDeleting(false);
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
              <button className='button-type-light delete-button' onClick={handleDelete}>
              { deleting ?
                  <div className='centered-spinner'><Spinner /></div>
                  :
                  'Delete'
              }
              </button>
              <button onClick={handleClick} id='start-button'>Start</button>
            </div>)
            }
        </div>
    </div>
  );
}

export default QuestFocus;