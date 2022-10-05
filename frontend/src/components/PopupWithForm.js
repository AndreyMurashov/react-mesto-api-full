import React from "react";

const PopupWithForm = (props) => {
  return (
    <div
      id={`popup__${props.name}`}
      className={`popup ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <h2 className="popup__title" id="profile__title">
          {props.title}
        </h2>
        <form
          name={`${props.name}-form`}
          id={`${props.name}-form`}
          className="popup__form"
          onSubmit={props.onSubmit}
          action="#"
        >
          {props.children}
          <input
            type="submit"
            className="popup__submit"
            id="popup__submit"
            value={props.buttonText}
          />
        </form>
        <button
          type="button"
          className="popup__close"
          id="popup__close"
          aria-label="Close"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
};

export default PopupWithForm;
