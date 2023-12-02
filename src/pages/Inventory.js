import React, {useState} from 'react';
import CharactersMain from '../components/CharactersMain';
import MainNav from '../components/MainNav';

function Inventory() {
  const [selectedTab, setSelectedTab] = useState();

  return (
    <main className="inventory">
        <MainNav 
          buttons={["Team","Characters", "Equipment"]}
          buttonFunction={setSelectedTab}
        />
        <CharactersMain />
    </main>
  );
}

export default Inventory;