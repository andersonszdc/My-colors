import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  align-items: center;
  padding: 0 8%;

  .action {
    display: flex;
    gap: 3.2rem;
  }

  .title {
    font-size: var(--fs-800);
  }
`;
