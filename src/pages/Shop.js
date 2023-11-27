import React from 'react';
import ShopNav from '../components/ShopNav';
import ShopMain from '../components/ShopMain';

function Shop() {

  return (
    <main className="shop">
        <ShopNav />
        <ShopMain />
    </main>
  );
}

export default Shop;