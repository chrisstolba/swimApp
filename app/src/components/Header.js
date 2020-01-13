import React from 'react';

import Navigation from "./Navigation";

import logo from '../images/logo.png';

const Header = props => {
  return (
    <div className="HeaderContainer">
      <img src={logo} alt="Team Logo" />
      <Navigation />
    </div>
  );
};

export default Header;
