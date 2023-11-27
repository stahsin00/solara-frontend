import React, { useEffect, useState } from 'react';
import QuestName from './QuestName';
import { useUser } from '../context/UserContext';

function QuestTasks() {
  const { userId } = useUser();
  const [ tasks, setTasks ] = useState([]);
  const [loading, setLoading] = useState(false);

useEffect( () => {
    setLoading(true);

    const apiUrl = `http://localhost:3500/api/user/tasks/${userId}`;
    fetch(apiUrl).then(res => res.json()).then(fetchedTasks => {
      setTasks(fetchedTasks.tasks);
      setLoading(false);
    })
    
  }, []);

  const taskList = tasks.map((task) => (
    <QuestName 
      key={task._id}
      taskName={task.taskName}
      description={task.description}
      completed={task.completed}
      type={task.type}
      tags={task.tags}
      difficulty={task.difficulty}
      priority={task.priority}
      time={task.time}
    />
  ));

  return (
    <div className="quest-tasks">
        <h2>All</h2>
        <hr />
        <div className='quest-list'>
          {loading ? (<div>loading...</div>) : taskList}
        </div>
    </div>
  );
}

export default QuestTasks;