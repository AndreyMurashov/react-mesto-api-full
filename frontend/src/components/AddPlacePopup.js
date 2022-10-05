import React, { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = (props) => {
  const nameRef = useRef();
  const linkRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    props.onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  };

  useEffect(() => {
    nameRef.current.value = "";
    linkRef.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="photo"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        type="text"
        className="popup__input"
        id="photo-name"
        ref={nameRef}
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__error" id="photo-name_error_text"></span>
      <input
        name="link"
        type="url"
        className="popup__input"
        id="photo-link"
        ref={linkRef}
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error" id="photo-link_error_text"></span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
