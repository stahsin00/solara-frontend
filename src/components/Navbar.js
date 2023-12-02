import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to='/quests'><button className='button-type-light'>Quests</button></Link>
            <Link to='/inventory'><button className='button-type-light'>Inventory</button></Link>
            <Link to='/shop'><button className='button-type-light'>Shop</button></Link>
            <button className='button-type-light'>Tutorial</button>
            <button className='button-type-light'>Documentation</button>
            <button className='button-type-light'>Sources</button>
        </nav>
    )
}

export default Navbar