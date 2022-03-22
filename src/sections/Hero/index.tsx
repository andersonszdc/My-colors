import React from "react";
import { DefaultBtn } from "../../styles/global";
import { Container } from "./styles";

const Hero = () => {
  return (
    <Container className="limit">
      <div>
        <img src="/hero.png" alt="4 imagens" />
      </div>
      <div className="copy">
        <h1>É no My-colors que todo mundo encontra sua próxima grande ideia</h1>
        <h2>
          No My-colors, as pessoas encontram inspiração, novos produtos e
          possibilidades num só lugar.
        </h2>
        <DefaultBtn>Crie sua conta</DefaultBtn>
      </div>
    </Container>
  );
};

export default Hero;
