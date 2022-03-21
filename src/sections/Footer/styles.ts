import styled from "styled-components";

export const Container = styled.footer`
  margin: 6.4rem 8%;
  display: flex;
  justify-content: space-between;

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
`;
