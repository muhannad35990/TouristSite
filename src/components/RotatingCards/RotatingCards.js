import React from "react";

function RotatingCards() {
  return (
    <section className="Rotatecontainer">
      <h1 className="Rotatecontainer__title">most popular tours</h1>
      <div className="cardsContainer">
        <div data-aos="fade-up" className=" rotatecard">
          <div className=" rotatecard__side rotatecard__side--front">
            <div className="rotatecard__picture rotatecard__picture--1"></div>
            <h4 className="rotatecard__heading ">
              <span className="rotatecard__heading-span rotatecard__heading-span--1">
                the sea explorer
              </span>
            </h4>
            <div className="rotatecard__details">
              <ul className="rotatecard__details__list">
                <li className="rotatecard__details__item">3 days tour</li>
                <li className="rotatecard__details__item">Up to 30 people</li>
                <li className="rotatecard__details__item">2 tour guides</li>
                <li className="rotatecard__details__item">
                  Sleep in cozy hotels
                </li>
                <li className="rotatecard__details__item">Difficulty:easy</li>
              </ul>
            </div>
          </div>
          <div className=" rotatecard__side rotatecard__side--back rotatecard__side--back--1">
            <div className="rotatecard__side--back__content">
              <h1 className="rotatecard__only">only</h1>
              <h1 className="rotatecard__price">$275</h1>
            </div>

            <a href="#dialog" className="button button--white">
              book now
            </a>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="rotatecard">
          <div className=" rotatecard__side rotatecard__side--front">
            <div className="rotatecard__picture rotatecard__picture--2"></div>
            <h4 className="rotatecard__heading ">
              <span className="rotatecard__heading-span rotatecard__heading-span--2">
                the forest hiker
              </span>
            </h4>

            <div className="rotatecard__details">
              <ul className="rotatecard__details__list">
                <li className="rotatecard__details__item">7 days tour</li>
                <li className="rotatecard__details__item">Up to 40 people</li>
                <li className="rotatecard__details__item">3 tour guides</li>
                <li className="rotatecard__details__item">
                  Sleep in cozy hotels
                </li>
                <li className="rotatecard__details__item">Difficulty:hard</li>
              </ul>
            </div>
          </div>
          <div className=" rotatecard__side rotatecard__side--back rotatecard__side--back--2">
            <div className="rotatecard__side--back__content">
              <h1 className="rotatecard__only">only</h1>
              <h1 className="rotatecard__price">$275</h1>
            </div>

            <a href="#dialog" className="button button--white">
              book now
            </a>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="rotatecard ">
          <div className=" rotatecard__side rotatecard__side--front">
            <div className="rotatecard__picture rotatecard__picture--3"></div>
            <h4 className="rotatecard__heading ">
              <span className="rotatecard__heading-span rotatecard__heading-span--3">
                the snow adventurer
              </span>
            </h4>

            <div className="rotatecard__details">
              <ul className="rotatecard__details__list">
                <li className="rotatecard__details__item">5 days tour</li>
                <li className="rotatecard__details__item">Up to 50 people</li>
                <li className="rotatecard__details__item">3 tour guides</li>
                <li className="rotatecard__details__item">
                  Sleep in cozy hotels
                </li>
                <li className="rotatecard__details__item">Difficulty:hard</li>
              </ul>
            </div>
          </div>
          <div className=" rotatecard__side rotatecard__side--back rotatecard__side--back--3">
            <div className="rotatecard__side--back__content">
              <h1 className="rotatecard__only">only</h1>
              <h1 className="rotatecard__price">$275</h1>
            </div>

            <a href="#dialog" className="button button--white">
              book now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RotatingCards;
