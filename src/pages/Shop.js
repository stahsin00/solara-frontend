import React, { useState } from 'react';
import ShopMain from '../components/ShopMain';
import MainNav from '../components/MainNav';

function Shop() {
  const [selectedTab, setSelectedTab] = useState();

  return (
    <main className="shop">
        <MainNav 
          buttons={["Characters","Equipment"]}
          buttonFunction={setSelectedTab}
        />
        <ShopMain selectedTab={selectedTab}/>
    </main>
  );
}

export default Shop;