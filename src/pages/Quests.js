import React, { useState } from 'react';
import QuestTasks from '../components/QuestTasks';
import QuestFocus from '../components/QuestFocus';
import CreateTask from '../components/CreateTask';
import MainNav from '../components/MainNav';

function Quests() {
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedTask, setSelectedTask] = useState();
  const [isAdding, setIsAdding] = useState(false);

  return (
    <main className="quests">
        <MainNav 
          buttons={["All","Regular Tasks", "Recurrent Tasks", "Projects"]}
          buttonFunction={setSelectedTab}
        />
        <QuestTasks setSelectedTask={setSelectedTask} selectedTab={selectedTab}/>
        {isAdding ? <CreateTask setIsAdding={setIsAdding}/> : <QuestFocus selectedTask={selectedTask} setSelectedTask={setSelectedTask}/>}
        <div id="absolute-position-add-quest"><button onClick={() => setIsAdding(true)} className="button-type-medium">Add</button></div>
    </main>
  );
}

export default Quests;