import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

function QuestName(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { userId, tasksChanged, setTasksChanged } = useUser();

  const handleClick = async (e) => {
    e.stopPropagation();

    if (loading) return;
    setLoading(true);

    setIsChecked(true);

    // complete task
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/completetask/${userId}/${props.task._id}`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            setLoading(false)
            setTasksChanged(!tasksChanged);
    
        }
    
  };

  return (
    <div className="QuestName" onClick={() => props.setSelectedTask(props.task)}>
        <div className={`${props.task.difficulty}-difficulty`}></div>
        <div className='quest-title'>{props.task.taskName}</div>
        <input type="checkbox" checked={isChecked} onClick={handleClick}/>
    </div>
  );
}

export default QuestName;