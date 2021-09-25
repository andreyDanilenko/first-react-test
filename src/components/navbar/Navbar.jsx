import React from "react";
import Logo from '../../assets/img/logo.png';
import './navbar.scss';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div>
            <img src={Logo} alt="logo" className="navbar__logo" />
            
            <div className="navbar__login">Войти</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;