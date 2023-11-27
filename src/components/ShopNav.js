import React from 'react';

function ShopNav() {

  return (
    <div className="shop-navbar">
        <div className='shop-nav-header'>
            <img src={require('../black-sun.png')} alt='logo of a sun' />
            <h2 id="os-title">SolOS</h2>
        </div>
        <div className='sizing'></div>
        <div className='shop-nav'>
            <button>Characters</button>
            <button>Equipment</button>
        </div>
    </div>
  );
}

export default ShopNav;