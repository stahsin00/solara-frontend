import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

function UserCharacterInfo(props) {
  const { userId, tasksChanged, setTasksChanged } = useUser();
    const { selectedCharacter, setSelectedCharacter } = props;
    const [level, setLevel] = useState(selectedCharacter.level);

    async function handleClick(e) {
        const apiUrl = `http://localhost:3500/api/user/levelcharacter/${userId}/${selectedCharacter._id}`;
  
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
        });
  
        if (response.ok) {
          setTasksChanged(!tasksChanged);
          const apiUrl = `http://localhost:3500/api/user/characterinfo/${userId}/${selectedCharacter._id}`;
  
          const responseNext = await fetch(apiUrl, {
              method: 'GET',
              headers: {
              'Content-Type': 'application/json',
              },
          });

          if (responseNext.ok) {
            const result = await responseNext.json();
            setLevel(result.character.level);
          }
        } else {
          const result = await response.json();
          console.log(result);
        }
    }

  return (
    <div className="character-info">
        <div className='character-info-details'>
          <h2 className='character-info-name'>{selectedCharacter.name}</h2>
          <hr />
          <div className='quest-description'>{selectedCharacter.description}</div>
          <div className='stats'>
              <div>Atk: {selectedCharacter.atk}</div>
              <div>Spe: {selectedCharacter.spe}</div>
          </div>
          <button onClick={() => {setSelectedCharacter(null)}} className='character-info-back'>Back</button>
          <div className='purchase-details'>
            <div>Level: {level}</div>
            <button onClick={handleClick}  className='character-info-buy'>Level Up</button>
          </div>
        </div>
        <div className='character-info-image'><img src={`http://localhost:3500/${selectedCharacter.art}`} alt='a character'></img></div>
    </div>
  );
}

export default UserCharacterInfo;