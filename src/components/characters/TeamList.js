import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import CharacterInfo from './CharacterInfo';
import UserCharacterInfo from './UserCharacterInfo';
import './CharacterList.css';
import Spinner from './../Spinner';
import TeamModal from './TeamModal';

function TeamList(props) {
    const { shop, characters, isLoading } = props;
    const [selectedCharacter, setSelectedCharacter] = useState();
    const [isOpen, setIsOpen] = useState(false);
    console.log(characters);

    if (isLoading) {
        return (
            <div className='loading-div'>
                <Spinner loading={true} size={'5rem'} color={'black'}/>
            </div>
        )
      }
  
    if (!characters || characters.length === 0) {
        return (<p>No characters.</p>)
    }

    const characterList = characters.map((character) => (
        (character == null) ? 
        <div className='add-to-team' onClick={() => setIsOpen(true)}>
            ADD
        </div> 
        :
        <CharacterCard 
            shop={shop}
            key={character.id} 
            character={character}
            setSelectedCharacter={setSelectedCharacter}
        />
    ));

    return (
        <>
            <div className="character-list">
                {(selectedCharacter) ? (shop ? <CharacterInfo selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}/> : <UserCharacterInfo selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}/>) : characterList}
            </div>
            <TeamModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    );
}

export default TeamList;