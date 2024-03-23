import React, { useState } from 'react';
import QuestTaskList from '../components/QuestTaskList';
import QuestFocus from '../components/QuestFocus';
import QuestCreateTask from '../components/QuestCreateTask';
import NavSub from '../components/NavSub';

function Quests() {
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedTask, setSelectedTask] = useState();
  const [isAdding, setIsAdding] = useState(false);

  return (
    <>
      <main className="quests">
          <NavSub 
            buttons={["All","Regular Tasks", "Recurrent Tasks", "Projects"]}
            buttonFunction={setSelectedTab}
          />
          <QuestTaskList setSelectedTask={setSelectedTask} selectedTab={selectedTab}/>
          <QuestFocus selectedTask={selectedTask} setSelectedTask={setSelectedTask}/>
          <div id="absolute-position-add-quest"><button onClick={() => setIsAdding(true)} className="button-type-medium">Add</button></div>
      </main>
      <QuestCreateTask isAdding={isAdding} setIsAdding={setIsAdding}/>
    </>
  );
}

export default Quests;