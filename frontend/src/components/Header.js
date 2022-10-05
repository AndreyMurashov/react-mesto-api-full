import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = (props) => {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </NavLink>
      {props.loggedIn ? (
        <span className="header__mail">
          {props.uEmail}{" "}
          <NavLink
            className="header__auth header__auth_out"
            to="/sign-in"
            onClick={props.handleLogout}
          >
            Выйти
          </NavLink>
        </span>
      ) : (
        <NavLink to={props.linkTo} className="header__auth">
          {props.authText}
        </NavLink>
      )}
    </header>
  );
};

export default Header;
