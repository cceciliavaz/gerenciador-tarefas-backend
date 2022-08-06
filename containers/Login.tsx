/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next/types";
import React, { MouseEvent, useState } from "react";
import { executeRequest } from "../services/apiServices";
import { setItem } from "../services/sessionCommand";
import { AccessTokenProps } from "../types/AccessTokenPropos";

export const Login:NextPage<AccessTokenProps> = ({setAcesstoken}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loadRequest, setLoadRequest] = useState(false);

  const doLogin = async (event: MouseEvent) => {
    setError("");
    setLoadRequest(false);

    try {
      if (!login || !password) {
        event.preventDefault();
        return setError("Favor informar usuário e senha");
      }
      const body = { login, password };

      setLoadRequest(true);

      const result = await executeRequest("login", "POST", body);

      if (!result || !result.data) {
        return setError("Ocorreu erro ao processar login, tente novamente!");
      }

      const {name, email, token} = result.data;

      setItem('sessionUser',  {name, email, token})
      
      setLoadRequest(false);

      setAcesstoken(token);

    } catch (e: any) {
      console.log("Error:" + e);
      if (e?.response?.data.error) {
        return setError(e?.response?.data.error);
      }
      setError("Ocorreu erro ao processar login, tente novamente!");
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
        <button disabled={loadRequest} type="button" onClick={doLogin}>
          {" "}
          Login{" "}
        </button>
      </form>
    </div>
  );
};
