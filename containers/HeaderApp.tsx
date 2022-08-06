/* eslint-disable @next/next/no-img-element */
import React from "react";

export const HeaderApp = () => {
  return (
    <>
      <header>
        <div className="container-header mt-3 py-2">
          <div className="col-xl-12 pb-2">
            <div className="row">
              <div className="col-xl-6  col-6">
                <img src="/logo.svg" className="logo" alt="Logo da FIAP" />
              </div>
              <div className="col-xl-6 col-6 text-right px-0">
                <div className="d-line">
                  <span>Olá, Ana Cecília </span>
                  <img
                    src="/exit-mobile.svg"
                    className="ml-2"
                    alt="Informe o seu login"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="bar mt-2">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-6  col-6">
                  <span className="font-bar">Tarefas</span>
                </div>
                <div className="col-xl-6 col-6 text-right px-0">
                  <img
                    src="/filter.svg"
                    className="mt-1"
                    alt="Informe o seu login"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
