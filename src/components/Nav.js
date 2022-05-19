import React from 'react'
import {Link} from 'react-router-dom';
import './navBar.css';

function Nav() {
  return (
    <div className='nav'>
        <div className='logo'>
            <Link to="/">Tick Tack</Link>
        </div>
        <ul>
            <li>
                <Link to="/bookstore">Bookstore</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <a href='#'>Log In</a>
            </li>
            <li>
                <a href='#'>Cart</a>
            </li>
        </ul>
    </div>
  )
}

export default Nav