import React from 'react';
import InventoryMain from '../components/InventoryMain';
import NavSub from '../components/NavSub';

function Inventory() {

  return (
    <main className="inventory">
        <NavSub 
          buttons={["Team","Characters","Equipment"]}
        />
        <InventoryMain />
    </main>
  );
}

export default Inventory;