import React, { useState, useEffect } from 'react';
import QuestTaskList from '../components/quests/QuestTaskList';
import QuestFocus from '../components/quests/QuestFocus';
import QuestCreateTask from '../components/quests/QuestCreateTask';
import NavSub from '../components/NavSub';
import { useUser } from '../context/UserContext';
import './Quests.css';

function Quests() {
  const [selectedTask, setSelectedTask] = useState();
  const [isAdding, setIsAdding] = useState(false);
  const {setSelectedTab} = useUser();

  useEffect( () => {
    setSelectedTab('All');
  }, []);

  return (
    <>
      <main className="quests">
          <NavSub 
            buttons={["All","Regular Tasks", "Recurrent Tasks", "Projects"]}
          />
          <QuestTaskList setSelectedTask={setSelectedTask} />
          <QuestFocus selectedTask={selectedTask} setSelectedTask={setSelectedTask}/>
          <div id="absolute-position-add-quest"><button onClick={() => setIsAdding(true)} className="button-type-medium">Add</button></div>
      </main>
      <QuestCreateTask isAdding={isAdding} setIsAdding={setIsAdding}/>
    </>
  );
}

export default Quests;