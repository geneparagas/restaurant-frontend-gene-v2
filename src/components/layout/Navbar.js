import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/restaurant-frontend-gene-v2' className="brand-logo">Restaurant-app</Link>
        <ul className="right">
        <li><NavLink className="btn red pulse" to='/restaurant-frontend-gene-v2/create'>Add Collection</NavLink></li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
