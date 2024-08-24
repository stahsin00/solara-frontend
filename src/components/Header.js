import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext';
import './Header.css';

function Header() {
  const { user } = useUser();

  return (
    <header>
        <img src={require('../assets/white-sun.png')} alt='logo of a sun' />
        <h1 className="header-title"><Link to='/'>Solara</Link></h1>
        <div className='header-user-info'>
          <div className='header-funds'><img src={require('../assets/exp.png')} alt='a book' /> {user.exp}</div>
          <div className='header-funds'><img src={require('../assets/coin.png')} alt='a coin' /> {user.balance}</div>
          <div id="header-username">{user.username}</div>
        </div>
    </header>
  );
}

export default Header;