import React from 'react';
import { useUser } from '../context/UserContext';

function CharacterInfo(props) {
  const { userId, tasksChanged, setTasksChanged } = useUser();
    const { selectedCharacter, setSelectedCharacter } = props;

    async function handleClick(e) {
        const apiUrl = `http://localhost:3500/api/user/addcharacter/${userId}/${selectedCharacter._id}`;
  
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
        });
  
        if (response.ok) {
          setTasksChanged(!tasksChanged);
          setSelectedCharacter(null);
        } else {
          const result = await response.json();
        }
    }

  return (
    <div className="character-info">
        <div className='character-info-details'>
          <h2 className='character-info-name'>{selectedCharacter.name}</h2>
          <hr />
          <div className='quest-description'>{selectedCharacter.description}</div>
          <div className='stats'>
              <div>Base Atk: {selectedCharacter.atk}</div>
              <div>Base Spe: {selectedCharacter.spe}</div>
          </div>
          <button onClick={() => {setSelectedCharacter(null)}} className='character-info-back'>Back</button>
          <div className='purchase-details'>
            <div><img src={require('../coin.png')} alt='a coin' className='character-price'/> {selectedCharacter.price}</div>
            <button onClick={handleClick}  className='character-info-buy'>Buy</button>
          </div>
        </div>
        <div className='character-info-image'><img src={`http://localhost:3500/${selectedCharacter.art}`} alt='a character'></img></div>
    </div>
  );
}

export default CharacterInfo;