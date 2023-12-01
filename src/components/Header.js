import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext';

function Header() {
  const { userId, username, tasksChanged } = useUser();
  const [balance, setBalance] = useState(0);
  const [exp, setExp] = useState(0);

  useEffect( () => {
    const apiUrl = `http://localhost:3500/api/user/userinfo/${userId}`;
    fetch(apiUrl).then(res => res.json()).then(fetchedUser => {
      setBalance(fetchedUser.balance);
      setExp(fetchedUser.exp);
    });

  }, [userId, setBalance, tasksChanged]);

  return (
    <header>
        <img src={require('../white-sun.png')} alt='logo of a sun' />
        <h1 id="header-title"><Link to='/'>Solara</Link></h1>
        <div className='header-user-info'>
          <div className='header-funds'><img src={require('../exp.png')} alt='a book' /> {exp}</div>
          <div className='header-funds'><img src={require('../coin.png')} alt='a coin' /> {balance}</div>
          <div id="header-username">{username}</div>
        </div>
    </header>
  );
}

export default Header;