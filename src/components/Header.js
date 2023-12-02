import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext';

function Header() {
  const { userId, username, tasksChanged } = useUser();
  const [balance, setBalance] = useState(0);
  const [exp, setExp] = useState(0);

  const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/userinfo/${userId}`;
  async function getUserInfo() {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const { user } = await response.json();
      setBalance(user.balance);
      setExp(user.exp);
    } 
  }

  // get info from server when there has been a change
  useEffect( () => {
    getUserInfo();
  }, [tasksChanged]);

  return (
    <header>
        <img src={require('../white-sun.png')} alt='logo of a sun' />
        <h1 className="header-title"><Link to='/'>Solara</Link></h1>
        <div className='header-user-info'>
          <div className='header-funds'><img src={require('../exp.png')} alt='a book' /> {exp}</div>
          <div className='header-funds'><img src={require('../coin.png')} alt='a coin' /> {balance}</div>
          <div id="header-username">{username}</div>
        </div>
    </header>
  );
}

export default Header;