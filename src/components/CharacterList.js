import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import CharacterInfo from './CharacterInfo';
import UserCharacterInfo from './UserCharacterInfo';

function CharacterList(props) {
    const { shop, characters, isLoading } = props;
    const [selectedCharacter, setSelectedCharacter] = useState();

    if (isLoading) {
        return <div>loading</div>
      }
  
    if (!characters || characters.length === 0) {
        return (<p>No characters.</p>)
    }

    const characterList = characters.map((character) => (
        (shop) ? (
        <CharacterCard 
            shop={shop}
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
            setSelectedCharacter={setSelectedCharacter}
        />) : (
            <CharacterCard 
            shop={shop}
            key={character._id} 
            _id={character._id} 
            name={character.name} 
            description={character.description}
            atk={character.atk}
            spe={character.spe}
            art={character.art}
            face={character.face}
            level={character.level} 
            exp={character.exp}
            maxExp={character.maxExp}
            team={character.team}
            setSelectedCharacter={setSelectedCharacter}
        />
        )
    ));

    return (
        <div className="character-list">
            {(selectedCharacter) ? (shop ? <CharacterInfo selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}/> : <UserCharacterInfo selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}/>) : characterList}
        </div>
    );
}

export default CharacterList;