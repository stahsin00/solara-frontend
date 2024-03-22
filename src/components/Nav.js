import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to='/quests'><button className='button-type-light'>Quests</button></Link>
            <Link to='/inventory'><button className='button-type-light'>Inventory</button></Link>
            <Link to='/shop'><button className='button-type-light'>Shop</button></Link>
            <Link to='/tutorial'><button className='button-type-light'>Tutorial</button></Link>
        </nav>
    )
}

export default Nav