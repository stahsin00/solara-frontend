import React from 'react';
import { useUser } from '../context/UserContext';
import './NavSub.css';

function NavSub(props) {
    const { selectedTab, setSelectedTab } = useUser();

    const buttonList = props.buttons.map((button) => (
        <button onClick={() => setSelectedTab(button)} key={button} className={(selectedTab === button) ? 'button-type-dark-selected' : 'button-type-dark'}>{button}</button>
    ));

  return (
    <div className="main-navbar">
        <div className='main-nav-header'>
            <img src={require('../assets/black-sun.png')} alt='logo of a sun' />
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