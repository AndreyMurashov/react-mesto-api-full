import React from "react";

const darkOverlay = {
  background: 'rgba(0, 0, 0, 0.9)'
}

const ImagePopup = (props) => {
  return (
    <div className={`popup ${props.card.link ? "popup_opened" : ""}`} id="popup-image" 
        style={darkOverlay}>
      <div className="popup__figure">
        <img className="popup__picture" src={props.card.link} alt={props.card.name} />
        <h3 className="popup__caption">{props.card.name}</h3>
        <button
          type="button"
          className="popup__close"
          id="popup__image-close"
          aria-label="Close"
          onClick={props.onClose}
        />
      </div>
    </div>
  );
};

export default ImagePopup;
