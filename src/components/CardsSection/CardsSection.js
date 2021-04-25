import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import ExploreIcon from "@material-ui/icons/Explore";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
function CardsSection() {
  return (
    <section className="cardSection">
      <div className="cardsGroup">
        <div data-aos="fade-up" className="card">
          <LanguageIcon
            style={{
              color: "#55c57a",
              fontSize: "6rem",
              marginBottom: "2rem",
            }}
          />
          <h2 className="card__title">explore the world</h2>
          <p className="card__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="card">
          <ExploreIcon
            style={{
              color: "#55c57a",
              fontSize: "6rem",
              marginBottom: "2rem",
            }}
          />
          <h2 className="card__title">explore the world</h2>
          <p className="card__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="card">
          <MenuBookIcon
            style={{
              color: "#55c57a",
              fontSize: "6rem",
              marginBottom: "2rem",
            }}
          />
          <h2 className="card__title">explore the world</h2>
          <p className="card__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="600" className="card">
          <FavoriteBorderIcon
            style={{
              color: "#55c57a",
              fontSize: "6rem",
              marginBottom: "2rem",
            }}
          />
          <h2 className="card__title">explore the world</h2>
          <p className="card__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CardsSection;
