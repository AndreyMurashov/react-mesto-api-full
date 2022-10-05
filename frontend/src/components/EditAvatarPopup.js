import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  const avatarRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    props.onUpdateAvatar({
      avatarURL: avatarRef.current.value,
    });
  };

  return (
    <>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={props.isOpen}
        onClose={props.onClose}
        buttonText="Сохранить"
        onSubmit={handleSubmit}
      >
        <input
          name="avatarURL"
          type="url"
          id="avatar-link"
          className="popup__input"
          placeholder="Ссылка на картинку"
          ref={avatarRef}
          required
        />
        <span className="popup__error" id="avatar-link_error_text"></span>
      </PopupWithForm>
    </>
  );
};

export default EditAvatarPopup;
