import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3.2rem 8%;

  .logo {
    font-size: var(--fs-500);
    font-weight: 700;
  }

  .navbar {
    display: flex;
    gap: 1.6rem;
  }

  .navbar a {
    font-size: var(--fs-300);
    font-weight: 400;
  }

  .action {
    display: flex;
    gap: 1.6rem;
  }
`;
