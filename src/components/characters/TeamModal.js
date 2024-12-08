import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import CharacterInfo from './CharacterInfo';
import UserCharacterInfo from './UserCharacterInfo';
import './CharacterList.css';
import Spinner from './../Spinner';
import './TeamModal.css';

function TeamModal({isOpen, setIsOpen}) {

    return (
        isOpen ?
        (<div className="team-modal-background" onClick={() => {setIsOpen(false)}}>
            <div className="team-modal">
                TODO
            </div>
        </div>)
        :
        (<></>)
    );
}

export default TeamModal;