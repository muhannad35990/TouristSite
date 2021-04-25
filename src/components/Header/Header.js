import React from "react";
import logowhite from "../../img/logo-white.png";
function Header() {
  return (
    <div className="header">
      <img src={logowhite} alt="logo" className="logo" />
      <div className="header__content">
        <h1 className="header__maintitle">outdoors</h1>
        <h3 className="header__subtitle">is where life happens</h3>
        <a href="#" className="btn btn--white">
          discover our tours
        </a>
      </div>
    </div>
  );
}

export default Header;
