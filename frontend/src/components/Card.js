import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

const Card = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = "element__thrash";
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_liked" : ""
  }`;

  const handleClick = () => {
    props.onCardClick(props.card);
  };

  const handleLikeClick = () => {
    props.onCardLike(props.card);
  };

  const handleDeleteClick = () => {
    props.onCardDelete(props.card._id);
  };

  return (
    <div className="element">
      <img
        className="element__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      {isOwn && (
        <button
          type="button"
          className={cardDeleteButtonClassName}
          aria-label="button-thrash"
          onClick={handleDeleteClick}
        />
      )}
      <div className="element__title">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__like-block">
          <button
            type="button"
            className={cardLikeButtonClassName}
            aria-label="button-like"
            onClick={handleLikeClick}
          ></button>
          <span className="element__like-counter">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
