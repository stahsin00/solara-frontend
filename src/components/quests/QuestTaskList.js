import React, { useEffect, useState } from 'react';
import QuestTask from './QuestTask';
import { useUser } from '../../context/UserContext';
import { questList } from '../../utils/quest';
import './QuestTaskList.css';
import Spinner from './../Spinner'

function QuestTaskList(props) {
  const { tasks, setTasks, tasksChanged, selectedTab } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchTasks() {
    setLoading(true);
    props.setSelectedTask(null);

    try {
      const result = await questList();
      setTasks(result);
      if (result.length > 0) props.setSelectedTask(result[0]);
      setError(null);
    } catch (e) {
      console.error(e.message);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect( () => {
    fetchTasks();
  }, [tasksChanged]);

  const taskList = (error) ? (<div className='error-message'>{error}</div>) 
                    : ((!tasks) ? <></> 
                      : tasks.map((task) => {
                        return <QuestTask 
                          task={task}
                          key={task.id}
                          setSelectedTask={props.setSelectedTask}
                        />
}));

  return (
    <div className="quest-tasks">
        {(selectedTab == "All" || selectedTab == "Regular Quests") ?
        (<div className='all-quests'>
          <h2>{selectedTab}</h2>
          <hr />
          <div className='quest-list'>
            {loading ? (<div className='loading-div'><Spinner size={'5rem'} color={'black'}/></div>) : taskList}
          </div>
        </div>)
        :
        <div>
          <h2>{selectedTab}</h2>
          <hr/>
          <div className='coming-soon'>Coming soon.</div>
        </div>
        }
    </div>
  );
}

export default QuestTaskList;