import React from "react";
import { DefaultBtn } from "../../styles/global";
import { Container } from "./styles";

const CTA = () => {
  return (
    <Container className="limit">
      <h1 className="title">Primeiros passos</h1>
      <div className="action">
        <DefaultBtn>Saiba mais sobre anúncios</DefaultBtn>
        <DefaultBtn>Crie uma conta</DefaultBtn>
      </div>
    </Container>
  );
};

export default CTA;
