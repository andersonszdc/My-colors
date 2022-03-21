import React from "react";
import { BtnAction } from "../../styles/global";
import { Container } from "./styles";

const CTA = () => {
  return (
    <Container>
      <h1 className="title">Primeiros passos</h1>
      <div className="action">
        <BtnAction>Saiba mais sobre anúncios</BtnAction>
        <BtnAction>Crie uma conta</BtnAction>
      </div>
    </Container>
  );
};

export default CTA;
