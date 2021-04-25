import React from "react";
import nat1 from "../../img/nat-1.jpg";
import nat2 from "../../img/nat-2.jpg";
import nat3 from "../../img/nat-3.jpg";

function GallerySection() {
  return (
    <section className="section1" id="section1">
      <div data-aos="zoom-in" className="container">
        <h1 className="container__title">
          exciting tours for advantures people
        </h1>

        <div className="content">
          <div className="content__left">
            <h2 className="content__title">
              you're going to fall in love with nature
            </h2>

            <p data-aos="flip-right" className="content__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui.
            </p>
            <h2 className="content__title">
              live advantures like you never have before
            </h2>
            <p data-aos="flip-right" className="content__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nulla deserunt voluptatum nam.
            </p>
            <a href="#" className="content__button">
              Learn more &rarr;
            </a>
          </div>
          <div className="content__right">
            <img
              data-aos="zoom-out"
              data-aos-delay="500"
              src={nat1}
              alt="img"
              className="image img1"
            />
            <img
              data-aos="zoom-out"
              data-aos-delay="1000"
              src={nat2}
              alt="img"
              className="image img2"
            />
            <img
              data-aos="zoom-out"
              data-aos-delay="1500"
              src={nat3}
              alt="img"
              className="image img3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
