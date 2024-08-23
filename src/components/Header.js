import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext';
import { userInfo } from '../utils/user';
import './Header.css';

function Header() {
  const { tasksChanged } = useUser();
  const [balance, setBalance] = useState(0);
  const [exp, setExp] = useState(0);

  async function fetchUserInfo() {
    try {
      const result = await userInfo();

      setBalance(result.balance);
      setExp(result.exp);
    } catch (e) {
      console.error(e);
    }
  }

  // get info from server when there has been a change
  useEffect( () => {
    fetchUserInfo();
  }, [tasksChanged]);

  return (
    <header>
        <img src={require('../white-sun.png')} alt='logo of a sun' />
        <h1 className="header-title"><Link to='/'>Solara</Link></h1>
        <div className='header-user-info'>
          <div className='header-funds'><img src={require('../exp.png')} alt='a book' /> {exp}</div>
          <div className='header-funds'><img src={require('../coin.png')} alt='a coin' /> {balance}</div>
          <div id="header-username">TODO</div>
        </div>
    </header>
  );
}

export default Header;