import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to='/quests'><button>Quests</button></Link>
            <Link to='/characters'><button>Inventory</button></Link>
            <Link to='/shop'><button>Shop</button></Link>
            <button>Tutorial</button>
            <button>Documentation</button>
            <button>Sources</button>
        </nav>
    )
}

export default Navbar