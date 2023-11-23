import React from 'react';
import QuestNav from '../components/QuestNav';
import QuestTasks from '../components/QuestTasks';
import QuestFocus from '../components/QuestFocus';

function Quests() {

  return (
    <main className="quests">
        <QuestNav />
        <QuestTasks />
        <QuestFocus />
    </main>
  );
}

export default Quests;