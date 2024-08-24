import React, { useEffect, useState } from 'react';
import CharacterList from './characters/CharacterList';
import { useUser } from '../context/UserContext';
import { userCharacterList, userTeam } from '../utils/character';

function InventoryMain() {
  const { selectedTab, setSelectedTab } = useUser();
  const [init, setInit] = useState(true);
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setSelectedTab('Characters');
    setInit(false);
  }, []);

  useEffect( () => {
    fetchUserCharacterList();
  }, [selectedTab]);

  async function fetchUserCharacterList() {
    if (loading) return;
    setLoading(true);

    try {
      if (selectedTab === 'Characters' || init) {
        const result = await userCharacterList();
        setCharacters(result);
      } else {
        const result = await userTeam();
        const team = [result.teamCharacter1, result.teamCharacter2, result.teamCharacter3, result.teamCharacter4].filter(character => character !== null);

        setCharacters(team);
      }
    } catch (e) {
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="shop-main">
        <CharacterList shop={false} isLoading={init ? init : loading} characters={characters}/>
    </div>
  );
}

export default InventoryMain;