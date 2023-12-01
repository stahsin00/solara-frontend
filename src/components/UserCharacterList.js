import React, { useState } from 'react';
import UserCharacterCard from './UserCharacterCard';
import UserCharacterInfo from './UserCharacterInfo';

function UserCharacterList(props) {
    const { characters, isLoading } = props;
    const [selectedCharacter, setSelectedCharacter] = useState();

    if (isLoading) {
        return <div>loading</div>
      }
  
    if (!characters || characters.length === 0) {
        return (<p>No characters.</p>)
    }

    const characterList = characters.map((character) => (
        <UserCharacterCard 
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
            setSelectedCharacter={setSelectedCharacter}
        />
    ));

    return (
        <div className="character-list">
            {(selectedCharacter) ? <UserCharacterInfo selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}/> : characterList}
        </div>
    );
}

export default UserCharacterList;