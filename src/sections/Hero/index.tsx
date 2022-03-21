import React from "react";
import { BtnAction } from "../../styles/global";
import { Container } from "./styles";

const Hero = () => {
  return (
    <Container>
      <div>
        <img src="/hero.png" alt="4 imagens" />
      </div>
      <div className="copy">
        <h1>É no My-colors que todo mundo encontra sua próxima grande ideia</h1>
        <h2>
          No My-colors, as pessoas encontram inspiração, novos produtos e
          possibilidades num só lugar.
        </h2>
        <BtnAction>Crie sua conta</BtnAction>
      </div>
    </Container>
  );
};

export default Hero;
