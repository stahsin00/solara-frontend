import React from 'react';
import QuestName from './QuestName';

function QuestTasks() {

  return (
    <div className="quest-tasks">
        <h2>All</h2>
        <hr />
        <div className='quest-list'>
            <QuestName />
            <QuestName />
            <QuestName />
            <QuestName />
            <QuestName />
            <QuestName />
            <QuestName />
            <QuestName />
            <QuestName />
        </div>
    </div>
  );
}

export default QuestTasks;