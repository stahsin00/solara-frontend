import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import './Nav.css';

const Nav = () => {
    const { selectedPage, setSelectedPage } = useUser();

    return (
        <nav>
            <Link to='/quests'><button className={(selectedPage === 'Quests') ? 'button-type-light-selected' : 'button-type-light'} onClick={() => setSelectedPage('Quests')}>Quests</button></Link>
            <Link to='/inventory'><button className={(selectedPage === 'Inventory') ? 'button-type-light-selected' : 'button-type-light'} onClick={() => setSelectedPage('Inventory')}>Inventory</button></Link>
            <Link to='/shop'><button className={(selectedPage === 'Shop') ? 'button-type-light-selected' : 'button-type-light'} onClick={() => setSelectedPage('Shop')}>Shop</button></Link>
        </nav>
    )
}

export default Nav