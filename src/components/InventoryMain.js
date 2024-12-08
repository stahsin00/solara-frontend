import React, { useEffect, useState } from 'react';
import CharacterList from './characters/CharacterList';
import { useUser } from '../context/UserContext';
import { userCharacterList, userTeam } from '../utils/character';
import TeamList from './characters/TeamList';

function InventoryMain() {
  const { selectedTab, setSelectedTab } = useUser();
  const [init, setInit] = useState(true);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setSelectedTab('Characters');
    setInit(false);
  }, []);

  useEffect( () => {
    setLoading(true);
    fetchUserCharacterList();
  }, [selectedTab]);

  async function fetchUserCharacterList() {
    setLoading(true);

    try {
      if (selectedTab === 'Characters' || init) {
        const result = await userCharacterList();
        setCharacters(result);
      } else {
        const result = await userTeam();
        const team = [result.teamCharacter1, result.teamCharacter2, result.teamCharacter3, result.teamCharacter4];

        setCharacters(team);
      }
    } catch (e) {
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="main-container">
      {
          (selectedTab != 'Equipment') ?
          (selectedTab == 'Characters' ? <CharacterList shop={false} isLoading={init ? init : loading} characters={characters}/> : <TeamList  shop={false} isLoading={init ? init : loading} characters={characters} />) :
          (<div className='coming-soon'>Coming soon.</div>)
      }
    </div>
  );
}

export default InventoryMain;