import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';

function ShopMain() {
    const [appState, setAppState] = useState({
        loading: false,
        characters: [],
    });

    useEffect( () => {
        setAppState({ loading: true });
    
        const apiUrl = `${process.env.REACT_APP_SERVER_URL}/characters/all`;
        fetch(apiUrl).then(res => res.json()).then(fetchedCharacters => {
          setAppState({ loading: false, characters: fetchedCharacters.characters} );
        })
        
      }, []);

  return (
    <div className="shop-main">
        <CharacterList isLoading={appState.loading} characters={appState.characters}/>
    </div>
  );
}

export default ShopMain;