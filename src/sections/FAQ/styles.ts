import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;
  padding: 0 8%;

  .title {
    font-size: var(--fs-800);
  }

  .questions {
    display: grid;
    gap: 6.4rem;
    grid-template-columns: 1fr 1fr;
  }

  .question {
    font-size: var(--fs-600);
  }

  .answer {
    font-size: var(--fs-400);
  }

  @media (max-width: 600px) {
    .questions {
      grid-template-columns: 1fr;
    }
  }
`;
