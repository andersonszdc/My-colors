import React from "react";
import WithIntersectionObserver from "../../observer/withIntersectionObserver";
import theme from "../../styles/theme";
import { Container } from "./styles";

interface IProps {
  SetTheme: any;
}

const HowItWorks = ({ SetTheme }: IProps) => {
  const callback = () => {
    SetTheme({ bg: theme.light_blue, fg: theme.dark_blue });
  };
  return (
    <WithIntersectionObserver callback={callback}>
      {() => {
        return (
          <Container id="howitowork">
            <h1 className="title">Como funciona</h1>
            <h2 className="subtitle">
              As pessoas usam o My-colors quando querem descobrir algo novo, mas
              não sabem exatamente o quê. O My-colors funciona como uma
              ferramenta de busca visual que ajuda essas pessoas a encontrarem
              ideias que têm tudo a ver com elas. <br />
              <br /> Nem todo mundo consegue descrever o que está procurando,
              mas todo mundo sabe reconhecer uma ideia incrível. Enquanto
              navegam pelo conteúdo do My-colors (os “Pins”), as pessoas vão
              refinando seus gostos até encontrar o que querem.
            </h2>
            <div>
              <img src="/breakfast.png" alt="imagens de café da manhã" />
            </div>
          </Container>
        );
      }}
    </WithIntersectionObserver>
  );
};

export default HowItWorks;
