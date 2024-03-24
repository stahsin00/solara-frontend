import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import { useUser } from '../context/UserContext';
import { userCharacterList } from '../utils/character';

function InventoryMain() {
  const { userId } = useUser();
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect( () => {
    fetchUserCharacterList();
  }, []);

  async function fetchUserCharacterList() {
    setLoading(true);

    try {
      const result = await userCharacterList(userId);
      setCharacters(result.characters)
    } catch (e) {
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="shop-main">
        <CharacterList shop={false} isLoading={loading} characters={characters}/>
    </div>
  );
}

export default InventoryMain;