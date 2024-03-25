import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import { useUser } from '../context/UserContext';
import { userCharacterList, userTeam } from '../utils/character';

function InventoryMain(props) {
  const { userId } = useUser();
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect( () => {
    fetchUserCharacterList();
  }, [props.selectedTab]);

  async function fetchUserCharacterList() {
    setLoading(true);

    try {
      const response = (async () => {
        if (props.selectedTab === 'Characters') {
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
        <CharacterList shop={false} isLoading={loading} characters={characters}/>
    </div>
  );
}

export default InventoryMain;