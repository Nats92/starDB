import React from 'react';
import './header.css';

const Header = () => (
  <div className='wrap'>
    <p className='logo'>Star DB</p>
    <nav className='main-nav'>
      <ul>
        <li><a href="#">People</a></li>
        <li><a href="#">Planets</a></li>
        <li><a href="#">Starships</a></li>
      </ul>
    </nav>
  </div>
)
export default Header;