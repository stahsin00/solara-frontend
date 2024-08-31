import React, { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { characterAddTeam, characterLevel, characterRemoveTeam, userCharacterInfo } from '../../utils/character';
import './CharacterInfo.css';
import Spinner from '../Spinner';

function UserCharacterInfo(props) {
  const { tasksChanged, setTasksChanged } = useUser();
    const { selectedCharacter, setSelectedCharacter } = props;
    const [team, setTeam] = useState(false);
    const [level, setLevel] = useState(0);
    const [exp, setExp] = useState(0);
    const [maxExp, setMaxExp] = useState(0);
    const [loading, setLoading] = useState(false);
    const [getting, setGetting] = useState(false);
    const [leveling, setLeveling] = useState(false);
    const [adding, setAdding] = useState(false);

    useEffect(() => {
      setUpInfo();
    }, []);

    useEffect(() => {
      setLoading(leveling || adding || getting);
    }, [leveling, adding, getting])

    async function setUpInfo() {
      setGetting(true);
      try {
        const result = await userCharacterInfo(selectedCharacter.character.id);
        setLevel(result.level);
        setExp(result.experience);
        setMaxExp(100);
        setTeam(result.teamPos > 0 && result.teamPos <= 4);
      } catch (e) {
        console.error(e.message);
      } finally {
        setGetting(false);
      }
    }

    async function handleLevel() {
      if (loading) return;
      setLeveling(true);
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
          setLeveling(false);
        }
    }

    async function handleClick() {
      if (loading) return;
      setAdding(true);
      if (team) {
        await RemoveFromTeam();
      } else {
        await addToTeam();
      }
      setAdding(false);
    }

    async function addToTeam() {
        try {
          await characterAddTeam(selectedCharacter.character.id, 1);

          setTasksChanged(!tasksChanged);

          const result = await userCharacterInfo(selectedCharacter.character.id);
          setTeam(result.teamPos > 0 && result.teamPos <= 4);
        } catch (e) {
          console.error(e.message);
        }
    }

    async function RemoveFromTeam() {
      try {
        await characterRemoveTeam(1);

        setTasksChanged(!tasksChanged);

        const result = await userCharacterInfo(selectedCharacter.character.id);
        setTeam(result.teamPos > 0 && result.teamPos <= 4);
      } catch (e) {
        console.error(e.message);
      }
  }

  return (
    <>
    <div className="character-info">
        <div className='character-info-details'>
          {
            getting?
            <div className='centered-spinner'><Spinner size={'5rem'}/></div>
            :
            <>
              <h2 className='character-info-name'>{selectedCharacter.character.name}</h2>
              <button onClick={handleClick} id='character-add-to-team'>
                {
                adding ? 
                (<div className='centered-spinner'><Spinner /></div>)
                : 
                (team ? '-' : '+')
                }
              </button>
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
                <button onClick={handleLevel}  className='character-info-buy'>
                  { leveling ?
                    <div className='centered-spinner'><Spinner /></div>
                    :
                    'Level'
                  }
                </button>
              </div>
            </>
          }
        </div>
        <div className='character-info-image'>
          {getting ? <></> : <img src={`${process.env.REACT_APP_IMAGE_URL}/${selectedCharacter.character.fullArt}`} alt='a character'></img>}
        </div>
    </div>
    </>
  );
}

export default UserCharacterInfo;