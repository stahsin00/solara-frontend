import React, { useState } from 'react';

function Home() {

  return (
    <div className="Home">
      <header>
        <h1 id="header-title">Solara</h1>
      </header>
      <nav>
            <button>Quests</button>
            <button>Characters</button>
            <button>Items</button>
            <button>Shop</button>
            <button>How To Play</button>
            <button>Documentation</button>
            <button>Sources</button>
      </nav>
      <main>
        <div className='quest-content'>
            <h2 id="os-title">SolOS</h2>
            <div id='quest-nav'>
                <button>All</button>
                <button>Today's Goal</button>
                <button>Recurrent Tasks</button>
                <button>Tasks</button>
                <button>Projects</button>
            </div>
        </div>
        <div>
            <h2>All</h2>
        </div>
        <div>

        </div>
      </main>
    </div>
  );
}

export default Home;
