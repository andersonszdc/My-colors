import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => `hsl(${theme.fg}, 0.2)`};
  width: 100%;
  padding: 1.6rem 8%;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => `hsl(${theme.bg})`};
  transition: 500ms ease-out;
  z-index: 1;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1600px;
  }

  .logo {
    font-size: var(--fs-500);
    font-weight: 700;
  }

  .navbar {
    display: flex;
    gap: 2.4rem;
  }

  .navbar a {
    font-size: var(--fs-400);
    font-weight: 400;
  }

  .action {
    display: flex;
    gap: 1.6rem;
  }
`;
