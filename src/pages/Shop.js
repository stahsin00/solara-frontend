import React, { useState } from 'react';
import ShopMain from '../components/ShopMain';
import NavSub from '../components/NavSub';

function Shop() {
  const [selectedTab, setSelectedTab] = useState();

  return (
    <main className="shop">
        <NavSub 
          buttons={["Featured", "Characters","Equipment"]}
          buttonFunction={setSelectedTab}
        />
        <ShopMain selectedTab={selectedTab}/>
    </main>
  );
}

export default Shop;