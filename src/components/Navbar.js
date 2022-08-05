import React from 'react'
import { Link } from 'react-router-dom'
import {SiThemoviedatabase} from 'react-icons/si'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav__container">
            <nav className='nav__links'>
                <h3 className='links__brand'>
                 <Link to='/'>
                    <SiThemoviedatabase /> Movies App
                    </Link>

                </h3>

                <ul>
                    <li className='links__link'>
                        <Link to='/'>Home</Link>

                    </li>
                    <li className='links__link'>
                        <Link to='/about' >About</Link>
                    </li>
                    <li className='links__link'>
                        <Link to='/favourite' >Favourite</Link>
                    </li>
                </ul>

            </nav>
        </div>

    </div>
  )
}
