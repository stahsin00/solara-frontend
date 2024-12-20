import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { questComplete } from '../../utils/quest';
import './QuestTask.css';

function QuestTask(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { tasksChanged, setTasksChanged } = useUser();

  let difficulty;
  let priority;

  switch (props.task.difficulty) {
    case 1:
      difficulty = "easy";
      break;
    case 2:
      difficulty = "medium";
      break;
    case 3:
      difficulty = "hard";
      break;
    default:
      difficulty = "unspecified";
      break
  }

  switch (props.task.priority) {
    case 1:
      priority = 'easy';
      break;
    case 2:
      priority = ' medium';
      break;
    case 3:
      priority = 'hard';
      break;
    default:
      priority = 'unspecified';
      break;
  }

  async function handleChange(e) {
    e.stopPropagation();
    console.log("click");

    if (loading) return;

    setLoading(true);

    setIsChecked(true);

    try {
      await questComplete(props.task.id);
      setIsChecked(false);
      setTasksChanged(!tasksChanged);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
    
  };

  return (
    <div className="QuestName" onClick={() => props.setSelectedTask(props.task)}>
        <div className={`${difficulty}-difficulty`}></div>
        {//<div className={`${priority}-difficulty priority`}></div> TODO
        }
        <div className='quest-title'>{props.task.name}</div>
        <input type="checkbox" checked={isChecked} onClick={(e) => e.stopPropagation()} onChange={handleChange}/>
    </div>
  );
}

export default QuestTask;