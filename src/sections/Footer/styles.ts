import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 18rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  padding: 0 8%;

  .logo {
    font-size: var(--fs-500);
  }

  .navbar {
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: 4rem;
    row-gap: 1.2rem;
  }

  .navbar a {
    font-size: var(--fs-300);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 3rem;

    .navbar {
      grid-template-columns: repeat(2, auto);
    }
  }
`;
