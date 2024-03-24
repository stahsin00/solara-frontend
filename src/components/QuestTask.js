import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { questComplete } from '../utils/quest';

function QuestTask(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { userId, tasksChanged, setTasksChanged } = useUser();

  async function handleChange(e) {
    e.stopPropagation()
    console.log("click");

    if (loading) return;

    setLoading(true);

    setIsChecked(e.target.checked);

    try {
      await questComplete(userId, props.task._id);
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
        <div className={`${props.task.difficulty}-difficulty`}></div>
        <div className='quest-title'>{props.task.taskName}</div>
        <input type="checkbox" checked={isChecked} onChange={handleChange}/>
    </div>
  );
}

export default QuestTask;