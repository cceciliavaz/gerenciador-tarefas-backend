/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Tasks = () => {
  return (
    <>
      <section className="container-tasks">
        <div className="col-xl-12">
          <img src="/not-found.svg" className="logo" alt="Logo da FIAP" />
        </div>
        <div className="col-12 text-center px-0">
          <div className="d-line">
    
              Você ainda não possui tarefas cadastradas!{" "}
   
          </div>
        </div>
      </section>
    </>
  );
};
