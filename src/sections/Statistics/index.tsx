import React from "react";
import { BtnAction } from "../../styles/global";
import { Container } from "./styles";

const Statistics = () => {
  return (
    <Container>
      <div className="visual">
        <img src="/girl.png" alt="mulher branca com cabelo azul" />
        <div>
          <p>400 mi</p>
          <p>Mais de 400 milhões de pessoas usam o My-colors todos os meses.</p>
        </div>
      </div>
      <div className="copy">
        <h1 className="title">Público certo. Lugar certo. Hora certa.</h1>
        <p className="paragraph">
          Você vai encontrar seu público mais engajado e fiel aqui no Pinterest.
          Todo mundo quer descobrir coisas novas — por isso o Pinterest atrai
          todos os públicos. De estudantes da geração Z e homens da geração Y a
          aposentados que adoram viajar, todo mundo entra no Pinterest pra se
          inspirar e colocar seus planos em prática.
        </p>
        <BtnAction>Veja estatísticas de audiência</BtnAction>
      </div>
    </Container>
  );
};

export default Statistics;
