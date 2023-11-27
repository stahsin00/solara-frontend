import React from 'react';

function CharactersNav() {

  return (
    <div className="characters-navbar">
        <div className='characters-nav-header'>
            <img src={require('../black-sun.png')} alt='logo of a sun' />
            <h2 id="os-title">SolOS</h2>
        </div>
    </div>
  );
}

export default CharactersNav;