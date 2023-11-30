import React, { useEffect, useState } from 'react';
import UserCharacterList from './UserCharacterList';
import { useUser } from '../context/UserContext';

function CharactersMain() {
    const { userId } = useUser();
    const [appState, setAppState] = useState({
        loading: false,
        characters: [],
    });

    useEffect( () => {
        setAppState({ loading: true });
    
        const apiUrl = `http://localhost:3500/api/user/characters/${userId}`;
        fetch(apiUrl).then(res => res.json()).then(fetchedCharacters => {
          setAppState({ loading: false, characters: fetchedCharacters.characters} );
        })
        
      }, []);

  return (
    <div className="shop-main">
        <UserCharacterList isLoading={appState.loading} characters={appState.characters}/>
    </div>
  );
}

export default CharactersMain;