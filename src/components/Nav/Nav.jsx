import React from 'react';
import { NavLink } from 'react-router-dom';
import styleNav from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styleNav.nav}>
      <ul className='list'>
        <li className={styleNav.item}>
          <NavLink to="/profile" activeClassName={styleNav.activeLink}>Profile</NavLink>
        </li>
        <li className={`${styleNav.item} ${styleNav.active}`}>
          <NavLink to="/dialogs" activeClassName={styleNav.activeLink}>Messages (Dialogs)</NavLink>
        </li>
        <li className={styleNav.item}>
          <NavLink to="/users" activeClassName={styleNav.activeLink}>Users</NavLink>
        </li>
        <li className={styleNav.item}>
          <NavLink to="/news" activeClassName={styleNav.activeLink}>News</NavLink>
        </li>
        <li className={styleNav.item}>
          <NavLink to="/music" activeClassName={styleNav.activeLink}>Music</NavLink>
        </li>
        <li className={styleNav.item}>
          <NavLink to="/settings" activeClassName={styleNav.activeLink}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Nav;