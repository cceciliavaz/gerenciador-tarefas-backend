/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import React from "react";
import { getItem } from "../services/sessionCommand";


type HeaderProps = {
  sair() : void
}

export const Header:NextPage<HeaderProps> = ({sair}) => {
  const fullName: any = getItem('sessionUser');

  const userName = fullName?.name.split(' ')[0] || ".";

  return (
    <div className="container-header">
      <img src="/logo.svg" alt="Logo Fiap" className="logo" />
      <button>
        <span>+</span>Adicionar Tarefa
      </button>
      <div className="mobile">
        <span>Olá, {userName}</span>
        <img src="/exit-mobile.svg" alt="Sair" onClick={sair}  />
      </div>
      <div className="desktop">
        <span>Olá, {userName}</span>
        <img src="/exit-desktop.svg" alt="Sair" onClick={sair} />
      </div>
    </div>
  );
};
