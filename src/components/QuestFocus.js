import React from 'react';
import { useUser } from '../context/UserContext';

function QuestFocus(props) {
  const { userId, setCurrentTask, tasksChanged, setTasksChanged } = useUser();

  let taskName = "No Task Selected";
  let description = "Please Select a Task.";
  let difficulty = "";

  if (props.selectedTask) {
    taskName = props.selectedTask.taskName;
    description = props.selectedTask.description
    difficulty = props.selectedTask.difficulty
  }

  async function handleDelete() {
    if (props.selectedTask) {
      const apiUrl = `http://localhost:3500/api/user/${userId}/${props.selectedTask._id}`;

      const response = await fetch(apiUrl, {
          method: 'DELETE',
          headers: {
          'Content-Type': 'application/json',
          },
      });

      if (response.ok) {
          // TODO
          const result = await response.json();
          console.log(result);
          props.setSelectedTask(null);
          setTasksChanged(!tasksChanged);

      } else {
          // TODO
          const result = await response.json();
          console.log(result);
      }
    }
  }

  function handleClick() {
    if (props.selectedTask) {
      setCurrentTask(props.selectedTask);
    }
  }

  return (
    <div className="quest-focus">
        <div className='quest-focus-black'>
            <h2>{taskName}</h2>
            <div className={`difficulty-text-${difficulty}`}>{difficulty}</div>
            <hr />
            <div className='quest-description'>
                {description}
            </div>
            {(!props.selectedTask) ? <></> :
            (<div>
              Rewards:
              <button id='edit-button'>Edit</button>
              <button id='delete-button' onClick={handleDelete}>Delete</button>
              <button onClick={handleClick} id='start-button'>Start</button>
            </div>)
            }
        </div>
    </div>
  );
}

export default QuestFocus;