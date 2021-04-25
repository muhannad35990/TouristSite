import React from "react";

function FormSection() {
  return (
    <section className="formsection">
      <div className="book__form">
        <h1 className="book__form__title">start booking now</h1>
        <form data-aos="fade-left" action="#" className="form">
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              id="name"
              placeholder="Full name"
              required
            />
            <label htmlFor="name" className="form__label">
              Full name
            </label>
          </div>
          <div className="form__group">
            <input
              type="email"
              className="form__input"
              id="email"
              placeholder="Email"
              required
            />
            <label htmlFor="email" className="form__label">
              Email
            </label>
          </div>
          <div className="form__group__radios">
            <div className="form__radio-group">
              <input
                type="radio"
                className="form__radio-input"
                id="small"
                name="size"
              />
              <label htmlFor="small" className="form__radio-label">
                <span className="form__radio-button"></span>
                Small tour
              </label>
            </div>
            <div className="form__radio-group">
              <input
                type="radio"
                className="form__radio-input"
                id="large"
                name="size"
              />
              <label htmlFor="large" className="form__radio-label">
                <span className="form__radio-button"></span>
                large tour
              </label>
            </div>
          </div>
          <div className="form__group">
            <button className="btn btn--green">Next step &rarr;</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormSection;
