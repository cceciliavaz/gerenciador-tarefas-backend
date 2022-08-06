/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Login = () => {
  return (
    <div className="container-login">
      <img src="/logo.svg" className="logo" alt="Logo da FIAP" />
      <form>
        <div className="input">
          <img src="/mail.svg" alt="Informe o seu login" />
          <input type="text" placeholder="Login"></input>
        </div>
        <div className="input">
          <img src="/lock.svg" alt="Informe a sua senha" />
          <input type="password" placeholder="Senha"></input>
          <img src="/eye.svg" className="password-icon" alt="Exiba sua senha" />
        </div>
        <button> Login </button>
      </form>
    </div>
  );
};
