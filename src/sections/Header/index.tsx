/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from "react";
import WithIntersectionObserver from "../../observer/withIntersectionObserver";
import { AlternateBtn, DefaultBtn } from "../../styles/global";
import theme from "../../styles/theme";
import { Container } from "./styles";

interface IProps {
  SetTheme: any;
}

const Header = ({ SetTheme }: IProps) => {
  const memoizedCallback = useCallback(() => {
    SetTheme({ bg: theme.dark, fg: theme.yellow });
  }, [SetTheme]);
  return (
    <WithIntersectionObserver callback={memoizedCallback}>
      <Container id="header">
        <div className="wrapper">
          <div className="logo">My-colors</div>
          <nav className="navbar">
            <a href="">Por que o My-colors</a>
            <a href="">Criar conteúdo</a>
            <a href="">Publicidade</a>
            <a href="">Ideias</a>
            <a href="">Recursos</a>
          </nav>
          <div className="action">
            <DefaultBtn>Entrar</DefaultBtn>
            <AlternateBtn>Faça seu cadastro</AlternateBtn>
          </div>
        </div>
      </Container>
    </WithIntersectionObserver>
  );
};

export default Header;
