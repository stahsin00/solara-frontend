import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to='/quests'><button>Quests</button></Link>
            <button>Characters</button>
            <button>Items</button>
            <button>Shop</button>
            <button>How To Play</button>
            <button>Documentation</button>
            <button>Sources</button>
        </nav>
    )
}

export default Navbar