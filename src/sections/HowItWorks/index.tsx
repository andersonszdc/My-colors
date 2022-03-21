import React from "react";
import { Container } from "./styles";

const HowItWorks = () => {
  return (
    <Container>
      <h1 className="title">Como funciona</h1>
      <h2 className="subtitle">
        As pessoas usam o My-colors quando querem descobrir algo novo, mas não
        sabem exatamente o quê. O My-colors funciona como uma ferramenta de
        busca visual que ajuda essas pessoas a encontrarem ideias que têm tudo a
        ver com elas. <br /><br /> Nem todo mundo consegue descrever o que está
        procurando, mas todo mundo sabe reconhecer uma ideia incrível. Enquanto
        navegam pelo conteúdo do My-colors (os “Pins”), as pessoas vão refinando
        seus gostos até encontrar o que querem.
      </h2>
      <div>
        <img src="/breakfast.png" alt="imagens de café da manhã" />
      </div>
    </Container>
  );
};

export default HowItWorks;
