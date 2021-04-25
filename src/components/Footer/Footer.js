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
              Copyright © by MUHANNAD HAMMADA. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatibus laudantium magni
              provident nam saepe ipsam, eaque ut deleniti sint, maiores
              veritatis non iure reprehenderit. Aut ad itaque alias vel aliquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
