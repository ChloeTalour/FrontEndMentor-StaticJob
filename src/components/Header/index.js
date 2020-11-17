import React from 'react';

// Import Styles
import './styles.scss';

// Import Img
import BackgroundMobile from '../../assets/images/bg-header-mobile.svg';
import BackgroundDesktop from '../../assets/images/bg-header-desktop.svg';

const Header = () => (
  <header className="header">
    <img src={BackgroundMobile} alt="background-mobile" className="header__background-mobile" />
    <img src={BackgroundDesktop} alt="background-desktop" className="header__background-desktop" />

  </header>
);

export default Header;
