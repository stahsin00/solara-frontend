import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

function QuestName(props) {
  const [isChecked, setIsChecked] = useState(false);

  const { userId, tasksChanged, setTasksChanged } = useUser();

  const handleClick = async (e) => {
    e.stopPropagation();
    setIsChecked(true);

    const apiUrl = `http://localhost:3500/api/user/completetask/${userId}/${props.task._id}`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // TODO
            const result = await response.json();
            console.log(result);
            setTasksChanged(!tasksChanged);
    
        } else {
            // TODO
            const result = await response.json();
            console.log(result);
        }
    
  };

  return (
    <div className="QuestName" onClick={() => props.setSelectedTask(props.task)}>
        <div className={`${props.difficulty}-difficulty`}></div>
        <div className='quest-title'>{props.taskName}</div>
        <input type="checkbox" checked={isChecked} onClick={handleClick}/>
    </div>
  );
}

export default QuestName;