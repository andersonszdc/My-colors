import styled from "styled-components";

export const Container = styled.main`
  margin: 0 8%;
  display: flex;
  gap: 12rem;
  justify-content: center;

  .copy {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .copy h1 {
    font-size: var(--fs-800);
  }

  .copy h2 {
    font-size: var(--fs-500);
  }
`;
