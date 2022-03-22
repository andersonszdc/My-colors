import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 18rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12rem;
  align-items: center;

  .copy {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  img {
    width: 100%;
  }

  .visual {
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }

  .visual__img {
    grid-column: 1/5;
    grid-row: 1/5;
  }

  .title {
    font-size: var(--fs-800);
  }

  .paragraph {
    font-size: var(--fs-500);
  }

  .card {
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    flex-direction: column;
    padding: 2.4rem;
    background-color: ${({ theme }) => `hsl(${theme.fg})`};
    color: ${({ theme }) => `hsl(${theme.bg})`};
    border-radius: 2.4rem;
    aspect-ratio: 1;
    width: 60%;
    bottom: 0;
    right: 0;
  }

  .card__title {
    font-size: var(--fs-700);
  }

  .card__paragraph {
    font-size: var(--fs-400);
  }
`;
