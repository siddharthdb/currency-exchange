import React from "react";
import logo from '../assets/logo.png';

export const NavBar = () => {
  return (
    <>
      <nav className="header">
        <a href="/">
          <img alt="Logo" className="header--logo" src={logo} />
        </a>
        <span className="header--brand">Currency Convertor</span>
      </nav>
    </>
  );
};
