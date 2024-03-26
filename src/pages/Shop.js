import React from 'react';
import ShopMain from '../components/ShopMain';
import NavSub from '../components/NavSub';

function Shop() {

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