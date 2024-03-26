import React, {useEffect} from 'react';
import InventoryMain from '../components/InventoryMain';
import NavSub from '../components/NavSub';
import { useUser } from '../context/UserContext';

function Inventory() {
  const {setSelectedTab} = useUser();

  useEffect( () => {
    setSelectedTab('Characters');
  }, []);

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