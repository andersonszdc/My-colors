import styled from "styled-components";

export const Container = styled.div`
  margin: 0 8% 18rem 8%;
  display: flex;
  gap: 12rem;

  .copy {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .title {
    font-size: var(--fs-800);
  }

  .paragraph {
    font-size: var(--fs-500);
  }
`;
