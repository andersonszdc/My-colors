import React from "react";
import WithIntersectionObserver from "../../observer/withIntersectionObserver";
import { BtnAction } from "../../styles/global";
import theme from "../../styles/theme";
import { Container } from "./styles";

interface IProps {
  SetTheme: any;
}

const Cases = ({ SetTheme }: IProps) => {
  const callback = () => {
    SetTheme({ bg: theme.yellow, fg: theme.dark });
  };
  return (
    <WithIntersectionObserver callback={callback}>
      <Container id="cases">
        <h1 className="title">
          As marcas e os criadores de conteúdo têm motivos pra comemorar
        </h1>
        <div className="cases">
          <div className="cases__item">
            <img className="card__banner" src="/MVMT.png" alt="" />
            <h3 className="card__title">A MVMT aumentou as vendas</h3>
            <p className="card__paragraph">
              O My-colors Trends ajudou a empresa a elaborar criativos novos e
              impactantes, com um custo por aquisição 4 vezes mais baixo do que
              seus indicadores internos mostravam.<sup>1</sup>
            </p>
            <BtnAction>Ler história</BtnAction>
          </div>
          <div className="cases__item">
            <img className="card__banner" src="Jomely-Breton.png" alt="" />
            <h3 className="card__title">
              Jomely Breton conquistou uma audiência maior
            </h3>
            <p className="card__paragraph">
              Com a ajuda do My-colors, a especialista em moda e viagens ganhou
              148% mais seguidores em um mês e se conectou com um público muito
              engajado.<sup>2</sup>
            </p>
            <BtnAction>Veja o perfil dela</BtnAction>
          </div>
        </div>
      </Container>
    </WithIntersectionObserver>
  );
};

export default Cases;
