import React from "react";

const InfoTooltip = (props) => {

    return (
      <div 
      id={`popup__${props.name}`}
      className={`popup ${props.isOpen ? "popup_opened" : ""}`} onClick={props.onCloseClick}>
        <div className="popup__container popup__container_auth">
          <img className="popup__img" src={props.src} alt={props.title}/>
          <h2 className="popup__text">{props.title}</h2>
          <button className="popup__close" type="button" title="Закрыть" onClick={props.onClose}/>
        </div>
      </div>
    );
  }
  
  export default InfoTooltip;