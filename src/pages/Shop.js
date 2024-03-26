import React, { useEffect } from 'react';
import ShopMain from '../components/ShopMain';
import NavSub from '../components/NavSub';
import { useUser } from '../context/UserContext';

function Shop() {
  const {setSelectedTab} = useUser();

  useEffect( () => {
    setSelectedTab('Characters');
  }, []);

  return (
    <main className="shop">
        <NavSub 
          buttons={["Featured", "Characters","Equipment"]}
        />
        <ShopMain />
    </main>
  );
}

export default Shop;