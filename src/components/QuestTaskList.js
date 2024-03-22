import React, { useEffect, useState } from 'react';
import QuestTask from './QuestTask';
import { useUser } from '../context/UserContext';

function QuestTaskList(props) {
  const { userId, tasks, setTasks, tasksChanged } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/tasks/${userId}`;
  async function getTasks() {
    setLoading(true);

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const { tasks } = await response.json();
      setTasks(tasks);
      setError(null);
    } else {
      const { message } = await response.json();
      setError(message);
    }

    setLoading(false);
  }

  useEffect( () => {
    getTasks();
  }, [tasksChanged]);

  const taskList = (error) ? (<div className='error-message'>{error}</div>) 
                    : ((!tasks) ? <></> 
                      : tasks.map((task) => {
                        return <QuestTask 
                          task={task}
                          key={task._id}
                          setSelectedTask={props.setSelectedTask}
                        />
}));

  return (
    <div className="quest-tasks">
        {(props.selectedTab == "All") ?
        (<div className='all-quests'>
          <h2>All</h2>
          <hr />
          <div className='quest-list'>
            {loading ? (<div>loading...</div>) : taskList}
          </div>
        </div>)
        :
        <div>
          <h2>Coming soon.</h2>
        </div>
        }
    </div>
  );
}

export default QuestTaskList;