import React, { useState } from 'react';
import QuestNav from '../components/QuestNav';
import QuestTasks from '../components/QuestTasks';
import QuestFocus from '../components/QuestFocus';
import CreateTask from '../components/CreateTask';

function Quests() {
  const [selectedTask, setSelectedTask] = useState();
  const [isAdding, setIsAdding] = useState(false);

  return (
    <main className="quests">
        <QuestNav />
        <QuestTasks setSelectedTask={setSelectedTask}/>
        {isAdding ? <CreateTask setIsAdding={setIsAdding}/> : <QuestFocus selectedTask={selectedTask} setSelectedTask={setSelectedTask}/>}
        <div id="absolute-position-add-quest"><button onClick={() => setIsAdding(true)}>Add</button></div>
    </main>
  );
}

export default Quests;