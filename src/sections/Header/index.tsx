/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BtnAction } from "../../styles/global";
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <div className="logo">My-colors</div>
      <nav className="navbar">
        <a href="">Por que o My-colors</a>
        <a href="">Criar conteúdo</a>
        <a href="">Publicidade</a>
        <a href="">Ideias</a>
        <a href="">Recursos</a>
      </nav>
      <div className="action">
        <BtnAction>Entrar</BtnAction>
        <BtnAction>Faça seu cadastro</BtnAction>
      </div>
    </Container>
  );
};

export default Header;
