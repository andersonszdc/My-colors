import styled from "styled-components";

export const Container = styled.div`
  margin: 0 8% 20rem 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12rem;

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
    flex-direction: column;
    gap: 32px;
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
