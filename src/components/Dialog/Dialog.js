import React from "react";
import nat8 from "../../img/nat-8.jpg";
import nat9 from "../../img/nat-9.jpg";
function Dialog() {
  return (
    <div className="dialog" id="dialog">
      <div className="dialog__content">
        <div className="dialog__left">
          <img src={nat8} alt="tour photo" className="dialog__img" />
          <img src={nat9} alt="tour photo" className="dialog__img" />
        </div>
        <div className="dialog__right">
          <a href="#section1" className="close-btn">
            &times;
          </a>
          <h2 className="heading-secondary">Start booking now</h2>
          <h3 className="heading-teriary">
            Important &ndash; please read these terms before booking
          </h3>
          <p className="dialog__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            illum explicabo voluptatibus distinctio in debitis dolor consequatur
            harum inventore animi, velit et iusto, doloremque unde reprehenderit
            blanditiis quidem ipsam ab? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Sapiente pariatur quidem reprehenderit vero
            voluptatum est, exercitationem, dolor, quasi sint assumenda fugiat
            numquam explicabo nam eveniet excepturi voluptate aliquid asperiores
            illo.
          </p>
          <a href="#" className="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
