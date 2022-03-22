import styled from "styled-components";

export const Container = styled.section`
  margin: 0 8% 18rem 8%;
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
