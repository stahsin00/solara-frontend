import React, { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { characterAddTeam, characterLevel, characterRemoveTeam, userCharacterInfo } from '../../utils/character';
import './CharacterInfo.css';

function UserCharacterInfo(props) {
  const { tasksChanged, setTasksChanged } = useUser();
    const { selectedCharacter, setSelectedCharacter } = props;
    const [team, setTeam] = useState(false);
    const [level, setLevel] = useState(0);
    const [exp, setExp] = useState(0);
    const [maxExp, setMaxExp] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setUpInfo();
    }, []);

    async function setUpInfo() {
      setLoading(true);
      try {
        const result = await userCharacterInfo(selectedCharacter.character.id);
        setLevel(result.level);
        setExp(result.experience);
        setMaxExp(100);
        setTeam(result.teamPos > 0 && result.teamPos <= 4);
      } catch (e) {
        console.error(e.message);
      } finally {
        setLoading(false);
      }
    }

    async function handleLevel() {
      if (loading) return;
      setLoading(true);
        try {
          await characterLevel(selectedCharacter.character.id);

          setTasksChanged(!tasksChanged);

          const result = await userCharacterInfo(selectedCharacter.character.id);
          console.log(result);
          setLevel(result.level);
          setExp(result.experience);
          setMaxExp(100);
        } catch (e) {
          console.error(e.message);
        } finally {
          setLoading(false);
        }
    }

    function handleClick() {
      if (team) {
        RemoveFromTeam();
      } else {
        addToTeam();
      }
    }

    async function addToTeam() {
      if (loading) return;
      setLoading(true);
        try {
          await characterAddTeam(selectedCharacter.character.id, 1);

          setTasksChanged(!tasksChanged);

          const result = await userCharacterInfo(selectedCharacter.character.id);
          setTeam(result.teamPos > 0 && result.teamPos <= 4);
        } catch (e) {
          console.error(e.message);
        } finally {
          setLoading(false);
        }
    }

    async function RemoveFromTeam() {
      if (loading) return;
      setLoading(true);
      try {
        await characterRemoveTeam(1);

        setTasksChanged(!tasksChanged);

        const result = await userCharacterInfo(selectedCharacter.character.id);
        setTeam(result.teamPos > 0 && result.teamPos <= 4);
      } catch (e) {
        console.error(e.message);
      } finally {
        setLoading(false);
      }
  }

  return (
    <>
    {loading ? (<div>loading</div>) :
    (<div className="character-info">
        <div className='character-info-details'>
          <h2 className='character-info-name'>{selectedCharacter.character.name}</h2>
          <button onClick={handleClick} id='character-add-to-team'>{loading ? '.' : (team ? '-' : '+')}</button>
          <hr />
          <div className='description' style={{ whiteSpace: 'pre-wrap' }}>{selectedCharacter.character.description}</div>
          <div className='stats'>
              <div>Atk: {selectedCharacter.attackStat}</div>
              <div>Spe: {selectedCharacter.speedStat}</div>
          </div>
          <button onClick={() => {setSelectedCharacter(null)}} className='character-info-back'>Back</button>
          <div className='purchase-details'>
            <div>Exp: {exp} / {maxExp}</div>
            <div>  |  </div>
            <div>Level: {level}</div>
            <button onClick={handleLevel}  className='character-info-buy'>Level</button>
          </div>
        </div>
        <div className='character-info-image'><img src={`${process.env.REACT_APP_IMAGE_URL}/${selectedCharacter.character.fullArt}`} alt='a character'></img></div>
    </div>)
    }
    </>
  );
}

export default UserCharacterInfo;