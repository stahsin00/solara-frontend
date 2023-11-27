import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList(props) {
    const { characters, isLoading } = props;

    if (isLoading) {
        return <div>loading</div>
      }

      console.log(characters);
  
    if (!characters || characters.length === 0) {
        return (<p>No characters.</p>)
    }

    const characterList = characters.map((character) => (
        <CharacterCard 
            key={character._id} 
            _id={character._id} 
            name={character.name} 
            description={character.description} 
            atk={character.atk} 
            def={character.def}
            hp={character.hp}
            spe={character.spe}
            art={character.art}
            face={character.face}
            price={character.price}
        />
    ));

    return (
        <div className="character-list">
            {characterList}
        </div>
    );
}

export default CharacterList;