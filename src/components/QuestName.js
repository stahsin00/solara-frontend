import React from 'react';

function QuestName() {

  return (
    <div className="QuestName">
        <div className='difficulty'></div>
        <div className='quest-title'>Sleep</div>
        <input type="checkbox" defaultChecked={false}/>
    </div>
  );
}

export default QuestName;