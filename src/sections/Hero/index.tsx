import React, { useCallback } from "react";
import WithIntersectionObserver from "../../observer/withIntersectionObserver";
import { DefaultBtn } from "../../styles/global";
import theme from "../../styles/theme";
import { Container } from "./styles";

interface IProps {
  SetTheme: any;
}

const Hero = ({ SetTheme }: IProps) => {
  const memoizedCallback = useCallback(() => {
    SetTheme({ bg: theme.dark, fg: theme.yellow });
  }, [SetTheme]);
  return (
    <WithIntersectionObserver callback={memoizedCallback}>
      <Container id="hero" className="limit">
        <div>
          <img src="/hero.png" alt="4 imagens" />
        </div>
        <div className="copy">
          <h1>
            É no My-colors que todo mundo encontra sua próxima grande ideia
          </h1>
          <h2>
            No My-colors, as pessoas encontram inspiração, novos produtos e
            possibilidades num só lugar.
          </h2>
          <DefaultBtn>Crie sua conta</DefaultBtn>
        </div>
      </Container>
    </WithIntersectionObserver>
  );
};

export default Hero;
