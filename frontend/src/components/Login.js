import React, { useState } from "react";
import Header from "./Header";

const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = data;
    console.log({ email, password });
    props.handleLogin(email, password);
    props.checkToken();
  }

  return (
    <>
      <Header authText="Регистрация" linkTo="/sign-up" />
      <div className="components">
        <div className="components__container">
          <h2 className="components__title">Вход</h2>
          <form
            className="components__form"
            method="POST"
            name="login"
            onSubmit={handleSubmit}
          >
            <input
              type="Email"
              className="components__input"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            <input
              className="components__input"
              placeholder="Пароль"
              name="password"
              type="password"
              value={data.password}
              onChange={handleChange}
            />
            <button className="components__button">Войти</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
