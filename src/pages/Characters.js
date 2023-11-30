import React from 'react';
import CharactersNav from '../components/CharactersNav';
import CharactersMain from '../components/CharactersMain';

function Characters() {

  return (
    <main className="characters">
        <CharactersNav />
        <CharactersMain />
    </main>
  );
}

export default Characters;