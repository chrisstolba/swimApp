import React from 'react';

import Navigation from "./Navigation";

import logo from '../images/logo.png';

const Header = props => {
  return (
    <div className="HeaderContainer">
      <img src={logo} alt="Team Logo" id="HeaderLogo" />
      <Navigation />
    </div>
  );
};

export default Header;
