import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import { useUser } from '../context/UserContext';
import { userCharacterList, userTeam } from '../utils/character';

function InventoryMain() {
  const { userId, selectedTab, setSelectedTab } = useUser();
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
      const response = (async () => {
        if (selectedTab === 'Characters' || init) {
            return await userCharacterList(userId);
        } else {
            return await userTeam(userId);
        }
      });

      const result = await response();

      setCharacters(result.characters)
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