import React from "react";
import logogreen from "../../img/logo-green-2x.png";
function Footer() {
  return (
    <section className="footer">
      <figure className="footer__logoContainer">
        <img src={logogreen} alt="logogreen" className="footer__logo" />
      </figure>
      <div className="footer__content">
        <div className="footer__content--right">
          <div className="footer__content__navigation">
            <ul className="list">
              <li className="list__item">company</li>
              <li className="list__item">contanct</li>
              <li className="list__item">careers</li>
              <li className="list__item">privicy policy</li>
              <li className="list__item">terms</li>
            </ul>
          </div>
        </div>
        <div className="footer__content--left">
          <div className="footer__content__paragraph">
            <p>
              Built by JONAS SCHMEDTMANN for his online course{"  "}
              <span className="list__item"> ADVANCED CSS AND SASS </span>.
              Copyright © by Jonas Schmedtmann. You are 100% allowed to use this
              webpage for both personal and commercial use, but NOT to claim it
              as your own design. A credit to the original author, Jonas
              Schmedtmann, is of course highly appreciated!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
