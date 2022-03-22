/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from "react";
import WithIntersectionObserver from "../../observer/withIntersectionObserver";
import theme from "../../styles/theme";
import { Container } from "./styles";

interface IProps {
  SetTheme: any;
}

const Footer = ({ SetTheme }: IProps) => {
  const memoizedCallback = useCallback(() => {
    SetTheme({ bg: theme.dark_green, fg: theme.light_green });
  }, [SetTheme]);
  return (
    <WithIntersectionObserver callback={memoizedCallback}>
      <Container id="footer">
        <div>
          <h1 className="logo">My-colors</h1>
        </div>
        <nav className="navbar">
          <a href="#">Sobre</a>
          <a href="#">Nosso perfil do My-colors</a>
          <a href="#">Newsroom</a>
          <a href="#">Carreiras</a>
          <a href="#">Diretrizes da marca</a>
          <a href="#">Recursos</a>
          <a href="#">Central de ajuda</a>
          <a href="#">Comunidade de negócios</a>
          <a href="#">Para desenvolvedores</a>
          <a href="#">Para investidores</a>
          <a href="#">Políticas</a>
          <a href="#">Copyright & Marca comercial</a>
          <a href="#">Termos de Serviço</a>
          <a href="#">Privacidade & Cookies</a>
          <a href="#">Anúncios personalizados</a>
        </nav>
      </Container>
    </WithIntersectionObserver>
  );
};

export default Footer;
