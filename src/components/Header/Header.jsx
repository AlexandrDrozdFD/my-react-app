import React, { Fragment } from 'react';
import styleHeader from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={styleHeader.header}>
          <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt='logo' />
          header
      </header>
    </Fragment>
  );

}

export default Header;