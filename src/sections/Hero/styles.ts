import styled from "styled-components";

export const Container = styled.main`
  margin-bottom: 15rem;
  display: flex;
  gap: 12rem;
  justify-content: center;
  min-height: calc(100vh - 118px);
  align-items: center;
  padding: 0 8%;

  .copy {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .copy h1 {
    font-size: var(--fs-800);
    font-weight: 700;
  }

  .copy h2 {
    font-size: var(--fs-500);
    font-weight: 400;
  }

  @media (max-width: 1200px) {
    margin-top: 8rem;
    flex-direction: column-reverse;
    gap: 8rem;

    .copy {
      text-align: center;
      align-items: center;
    }
  }
`;
