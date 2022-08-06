/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Footer = () => {
  return (
    <>
      <section className="container-footer">
        <div className="col-12 px-0">
          <button className="button-app text-left">
            <img
              src="/plus.svg"
              className="mx-2"
              alt="Informe o seu login"
            />
            Adicionar uma tarefa
          </button>
        </div>
      </section>
    </>
  );
};
