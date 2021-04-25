import React from "react";
import nat8 from "../../img/nat-8.jpg";
import nat9 from "../../img/nat-9.jpg";
import mp4video from "../../img/video.mp4";
import webmvideo from "../../img/video.webm";
function Stories() {
  return (
    <section className="stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={mp4video} type="video/mp4" />
          <source src={webmvideo} type="video/webm" />
          Your brwoser is not supported!
        </video>
      </div>
      <div className="heading">
        <h1>WE MAKE PEOPLE GENUINELY HAPPY</h1>
      </div>
      <div className="story" data-aos="new-animation">
        <figure className="story__image">
          <img src={nat8} alt="person" className="story__img" />
          <figcaption className="story__caption">Merry chire</figcaption>
        </figure>
        <div className="story__write">
          <h3>I HAD THE BEST WEEK EVER WITH MY FAMILY</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
            aspernatur libero repellat quis consequatur ducimus quam nisi
            exercitationem omnis earum qui.
          </p>
        </div>
      </div>
      <div data-aos="new-animation" className="story">
        <figure className="story__image">
          <img src={nat9} alt="person" className="story__img" />
          <figcaption className="story__caption">Amet hann</figcaption>
        </figure>
        <div className="story__write">
          <h3>I HAD THE BEST WEEK EVER WITH MY FAMILY</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
            aspernatur libero repellat quis consequatur ducimus quam nisi
            exercitationem omnis earum qui.
          </p>
        </div>
      </div>
      <a href="#" className="story__button">
        Learn more &rarr;
      </a>
    </section>
  );
}

export default Stories;
