import React from 'react';

function NavSub(props) {

    const buttonList = props.buttons.map((button) => (
        <button onClick={() => props.buttonFunction(button)} key={button} className='button-type-dark'>{button}</button>
    ));

  return (
    <div className="main-navbar">
        <div className='main-nav-header'>
            <img src={require('../black-sun.png')} alt='logo of a sun' />
            <h2 className="os-title">SolOS</h2>
        </div>
        <div className='sizing'></div>
        <div className='main-nav'>
            {buttonList}
        </div>
    </div>
  );
}

export default NavSub;