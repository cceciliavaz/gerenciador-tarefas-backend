/* eslint-disable @next/next/no-img-element */
import React, { MouseEvent, useState } from "react";

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const doLogin = (event: MouseEvent) => {
    try {
      if(!login || !password){
        event.preventDefault();
        return setError('Favor informar usuário e senha');
      }
      setError('Dados validados com sucesso');

    } catch (error) {
      console.log("Error:" + error);
    }
  };

  return (
    <div className="container-login">
      <img src="/logo.svg" className="logo" alt="Logo da FIAP" />
      <form>
        <p className="error">{error}</p>
        <div className="input">
          <img src="/mail.svg" alt="Informe o seu login" />
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          ></input>
        </div>
        <div className="input">
          <img src="/lock.svg" alt="Informe a sua senha" />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <button type="button" onClick={doLogin}> Login </button>
      </form>
    </div>
  );
};
