import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;

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
`;
