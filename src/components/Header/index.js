import React from 'react';
import BackgroundMobile from '../../assets/images/bg-header-mobile.svg';
import BackgroundDesktop from '../../assets/images/bg-header-desktop.svg';

const Header = () => (
  <header>
    <img src={BackgroundMobile} alt="background-mobile" />
    <img src={BackgroundDesktop} alt="background-desktop" />

  </header>
);

export default Header;
