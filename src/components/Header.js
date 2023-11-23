import React from 'react';
import { Link } from 'react-router-dom'

function Header() {

  return (
    <header>
        <h1 id="header-title"><Link to='/'>Solara</Link></h1>
    </header>
  );
}

export default Header;