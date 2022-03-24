import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12rem;
  padding: 0 8%;

  .title {
    font-size: var(--fs-800);
  }

  .cases {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15rem;
  }

  .cases__item {
    display: grid;
    gap: 32px;
    justify-items: center;
  }

  .card__banner {
    width: 100%;
  }

  .card__title {
    font-size: var(--fs-600);
  }

  .card__paragraph {
    font-size: var(--fs-400);
  }
`;
