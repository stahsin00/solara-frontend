import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import { useUser } from '../context/UserContext';

function InventoryMain() {
    const { userId } = useUser();
    const [appState, setAppState] = useState({
        loading: false,
        characters: [],
    });

    useEffect( () => {
        setAppState({ loading: true });
    
        const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/characters/${userId}`;
        fetch(apiUrl).then(res => res.json()).then(fetchedCharacters => {
          setAppState({ loading: false, characters: fetchedCharacters.characters} );
        })
        
      }, []);

  return (
    <div className="shop-main">
        <CharacterList shop={false} isLoading={appState.loading} characters={appState.characters}/>
    </div>
  );
}

export default InventoryMain;