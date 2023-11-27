import React from 'react';

function QuestName(props) {

  return (
    <div className="QuestName">
        <div className={`${props.difficulty}-difficulty`}></div>
        <div className='quest-title'>{props.taskName}</div>
        <input type="checkbox" checked={false} />
    </div>
  );
}

export default QuestName;