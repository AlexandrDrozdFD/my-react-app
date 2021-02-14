import React from 'react';
import styleNav from './Nav.module.css';

const Nav = () => {
  return (
    <nav className='nav'>
        <ul className='list'>
          <li className={styleNav.item}>Profile</li>
          <li className={`${styleNav.item} ${styleNav.active}`}>Messages</li>
          <li className={styleNav.item}>News</li>
          <li className={styleNav.item}>Music</li>
          <li className={styleNav.item}>Settings</li>
        </ul>
    </nav>
  )
}
export default Nav;