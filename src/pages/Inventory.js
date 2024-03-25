import React, {useState} from 'react';
import InventoryMain from '../components/InventoryMain';
import NavSub from '../components/NavSub';

function Inventory() {
  const [selectedTab, setSelectedTab] = useState("Characters");

  return (
    <main className="inventory">
        <NavSub 
          buttons={["Team","Characters","Equipment"]}
          buttonFunction={setSelectedTab}
        />
        <InventoryMain selectedTab={selectedTab} />
    </main>
  );
}

export default Inventory;