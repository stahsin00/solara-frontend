import React from 'react';
import { useUser } from '../context/UserContext';
import { characterBuy } from '../utils/character';

function CharacterInfo(props) {
  const { userId, tasksChanged, setTasksChanged } = useUser();
  const { selectedCharacter, setSelectedCharacter } = props;

  async function handleClick() {
      try {
        await characterBuy(userId, selectedCharacter._id);
        setTasksChanged(!tasksChanged);
        setSelectedCharacter(null);
      } catch (e) {
        console.error(e.message);
      }
  }

  return (
    <div className="character-info">
        <div className='character-info-details'>
          <h2 className='character-info-name'>{selectedCharacter.name}</h2>
          <hr />
          <div className='description' style={{ whiteSpace: 'pre-wrap' }}>{selectedCharacter.description}</div>
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
        <div className='character-info-image'><img src={`${process.env.REACT_APP_IMAGE_URL}/${selectedCharacter.art}`} alt='a character'></img></div>
    </div>
  );
}

export default CharacterInfo;