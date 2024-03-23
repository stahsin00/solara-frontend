import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

function UserCharacterInfo(props) {
  const { userId, tasksChanged, setTasksChanged } = useUser();
    const { selectedCharacter, setSelectedCharacter } = props;
    const [level, setLevel] = useState(selectedCharacter.level);
    const [exp, setExp] = useState(selectedCharacter.exp);
    const [maxExp, setMaxExp] = useState(selectedCharacter.maxExp);

    async function handleClick(e) {
        const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/levelcharacter/${userId}/${selectedCharacter._id}`;
  
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
        });
  
        if (response.ok) {
          setTasksChanged(!tasksChanged);
          const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/characterinfo/${userId}/${selectedCharacter._id}`;
  
          const responseNext = await fetch(apiUrl, {
              method: 'GET',
              headers: {
              'Content-Type': 'application/json',
              },
          });

          if (responseNext.ok) {
            const result = await responseNext.json();
            setLevel(result.character.level);
            setExp(result.character.exp);
            setMaxExp(result.character.maxExp);
          }
        } else {
          const result = await response.json();
          console.log(result);
        }
    }

    async function addToTeam(e) {
        const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/addtoteam/${userId}/${selectedCharacter._id}`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
          const result = await response.json();
          console.log(result);
        }
    }

  return (
    <div className="character-info">
        <div className='character-info-details'>
          <h2 className='character-info-name'>{selectedCharacter.name}</h2>
          <button onClick={addToTeam} id='character-add-to-team'>+</button>
          <hr />
          <div className='description' style={{ whiteSpace: 'pre-wrap' }}>{selectedCharacter.description}</div>
          <div className='stats'>
              <div>Atk: {selectedCharacter.atk}</div>
              <div>Spe: {selectedCharacter.spe}</div>
          </div>
          <button onClick={() => {setSelectedCharacter(null)}} className='character-info-back'>Back</button>
          <div className='purchase-details'>
            <div>Exp: {exp} / {maxExp}</div>
            <div>  |  </div>
            <div>Level: {level}</div>
            <button onClick={handleClick}  className='character-info-buy'>Level</button>
          </div>
        </div>
        <div className='character-info-image'><img src={`${process.env.REACT_APP_IMAGE_URL}/${selectedCharacter.art}`} alt='a character'></img></div>
    </div>
  );
}

export default UserCharacterInfo;