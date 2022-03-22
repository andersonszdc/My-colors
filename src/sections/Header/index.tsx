/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AlternateBtn, DefaultBtn } from "../../styles/global";
import { Container } from "./styles";

const Header = () => {
  return (
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
  );
};

export default Header;
