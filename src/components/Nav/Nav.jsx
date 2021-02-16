import React from 'react';
import styleNav from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styleNav.nav}>
        <ul className='list'>
          <li className={styleNav.item}>
            <a href="/profile">Profile</a>
          </li>
          <li className={`${styleNav.item} ${styleNav.active}`}>
          <a href="/dialogs ">Messages</a>
          </li>
          <li className={styleNav.item}>
          <a href="/news">News</a>
          </li>
          <li className={styleNav.item}>
          <a href="/music">Music</a>
          </li>
          <li className={styleNav.item}>
          <a href="/settings">Settings</a>
          </li>
        </ul>
    </nav>
  )
}
export default Nav;