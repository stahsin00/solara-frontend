import React from 'react';

function QuestNav() {

  return (
    <div className="quest-navbar">
        <div className='quest-nav-header'>
            <h2 id="os-title">SolOS</h2>
        </div>
        <div className='sizing'></div>
        <div id='quest-nav'>
            <button>All</button>
            <button>Today's Goal</button>
            <button>Recurrent Tasks</button>
            <button>Tasks</button>
            <button>Projects</button>
        </div>
    </div>
  );
}

export default QuestNav;