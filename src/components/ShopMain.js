import React, { useEffect, useState } from 'react';
import CharacterList from './characters/CharacterList';
import { characterList } from '../utils/character';
import { useUser } from '../context/UserContext';

function ShopMain() {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const {selectedTab, setSelectedTab} = useUser();

  useEffect( () => {
    fetchCharacterList();
  }, []);

  async function fetchCharacterList() {
    setLoading(true);

    try {
      const result = await characterList();
      setCharacters(result)
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
          (<CharacterList shop={true} isLoading={loading} characters={characters}/>) :
          (<div className='coming-soon'>Coming soon.</div>)
        }
    </div>
  );
}

export default ShopMain;