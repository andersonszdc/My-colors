import React from "react";
import { DefaultBtn } from "../../styles/global";
import { Container } from "./styles";

const Statistics = () => {
  return (
    <Container>
      <div className="visual">
        <div className="visual__img">
          <img src="/girl.png" alt="mulher branca com cabelo azul" />
        </div>
        <div className="card">
          <p className="card__title">400 mi</p>
          <p className="card__paragraph">
            Mais de 400 milhões de pessoas usam o My-colors todos os meses.
          </p>
        </div>
      </div>
      <div className="copy">
        <h1 className="title">Público certo. Lugar certo. Hora certa.</h1>
        <p className="paragraph">
          Você vai encontrar seu público mais engajado e fiel aqui no My-colors.
          Todo mundo quer descobrir coisas novas — por isso o My-colors atrai
          todos os públicos. De estudantes da geração Z e homens da geração Y a
          aposentados que adoram viajar, todo mundo entra no My-colors pra se
          inspirar e colocar seus planos em prática.
        </p>
        <DefaultBtn>Veja estatísticas de audiência</DefaultBtn>
      </div>
    </Container>
  );
};

export default Statistics;
