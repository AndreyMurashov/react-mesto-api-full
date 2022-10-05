import React, { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext"; //пр
import PopupWithForm from "./PopupWithForm"; //пр

const EditProfilePopup = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      name="profile"
      title="Редактирование профиля"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <input
        name="profileName"
        type="text"
        className="popup__input"
        id="profile-name"
        defaultValue={name}
        placeholder="Введите имя"
        minLength="2"
        maxLength="40"
        required
        onChange={handleNameChange}
      />
      <span className="popup__error" id="profile-name_error_text"></span>
      <input
        name="profileStatus"
        type="text"
        className="popup__input"
        id="profile-status"
        defaultValue={description}
        placeholder="Введите информацию о себе"
        minLength="2"
        maxLength="200"
        required
        onChange={handleDescriptionChange}
      />
      <span className="popup__error" id="profile-status_error_text"></span>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
