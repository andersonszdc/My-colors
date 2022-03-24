import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => `hsl(${theme.fg}, 0.2)`};
  width: 100%;
  padding: 1.6rem 0;
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
    padding: 0 8%;
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

  .btnMenu {
    display: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .btnMenu path {
    fill: ${({ theme }) => `hsl(${theme.fg})`};
  }

  @media (max-width: 1300px) {
    .btnMenu {
      display: block;
    }
    
    .navbar,
    .action {
      display: none;
    }
  }
`;
