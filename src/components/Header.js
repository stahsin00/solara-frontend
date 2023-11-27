import React from 'react';
import { Link } from 'react-router-dom'

function Header() {

  return (
    <header>
        <img src={require('../white-sun.png')} alt='logo of a sun' />
        <h1 id="header-title"><Link to='/'>Solara</Link></h1>
    </header>
  );
}

export default Header;