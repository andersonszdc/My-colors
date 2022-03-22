import styled from "styled-components";

export const Container = styled.main`
  margin-bottom: 15rem;
  display: flex;
  gap: 12rem;
  justify-content: center;
  min-height: calc(100vh - 118px);
  align-items: center;

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
`;
