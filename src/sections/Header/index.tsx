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
        <svg
          className="btnMenu"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 11H4C3.4 11 3 11.4 3 12C3 12.6 3.4 13 4 13H20C20.6 13 21 12.6 21 12C21 11.4 20.6 11 20 11ZM4 8H20C20.6 8 21 7.6 21 7C21 6.4 20.6 6 20 6H4C3.4 6 3 6.4 3 7C3 7.6 3.4 8 4 8ZM20 16H4C3.4 16 3 16.4 3 17C3 17.6 3.4 18 4 18H20C20.6 18 21 17.6 21 17C21 16.4 20.6 16 20 16Z"
            fill="black"
          />
        </svg>
      </div>
    </Container>
  );
};

export default Header;
