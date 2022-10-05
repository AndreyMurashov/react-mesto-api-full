import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

export const Register = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = data;
    console.log({ email, password });
    props.handleRegister(email, password);
  };
  return (
    <>
      <Header authText="Войти" linkTo="/sign-in" 
      />
      <div className="components">
        <div className="components__container">
          <h2 className="components__title">Регистрация</h2>
          <form
            className="components__form"
            onSubmit={handleSubmit}
            method="POST"
          >
            <input
              type="Email"
              name="email"
              className="components__input"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
            />
            <input
              className="components__input"
              name="password"
              type="password"
              placeholder="Пароль"
              value={data.password}
              onChange={handleChange}
            />
            <button className="components__button">Зарегистрироваться</button>
          </form>
          <p className="components__text">
            Уже зарегистрированы?{" "}
            <NavLink className="components__text" to="/sign-in">
              Войти
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
