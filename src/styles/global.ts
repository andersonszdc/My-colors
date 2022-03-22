import styled, { createGlobalStyle } from "styled-components";
import { Itheme } from "./theme";

interface GlobalProps {
  theme: Itheme;
}

export default createGlobalStyle<GlobalProps>`
    /* general reset */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        color: inherit;
        background-color: transparent;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Lato", sans-serif;
        color: ${({ theme }) => `hsl(${theme.fg})`};
        background-color: ${({ theme }) => `hsl(${theme.bg})`};
        transition: 500ms ease-out;
    }

    .limit {
        max-width: 1600px;
        margin-left: auto;
        margin-right: auto;
    }

    /* color utility classes */
    :root {
        /* colors */
        --clr-dark: 199, 55%, 15%;
        --clr-yellow: 51, 90%, 81%;
        --clr-light-blue: 201%, 93%, 89%;
        --clr-dark-blue: 189, 100%, 16%;
        --clr-orange: 21, 100%, 72%;

        /* font-sizes */
        --fs-800: 6.4rem;
        --fs-700: 5.0rem;
        --fs-600: 2.6rem;
        --fs-500: 2.4rem;
        --fs-400: 1.8rem;
        --fs-300: 1.6rem;
        --fs-200: 1.3rem;
    }

    /* font utility classes */

`;

export const DefaultBtn = styled.button<GlobalProps>`
  width: fit-content;
  font-size: var(--fs-300);
  font-weight: 700;
  border: 2px solid ${({ theme }) => `hsl(${theme.fg})`};
  border-radius: 48px;
  padding: 12px 24px;
  cursor: pointer;
  transition: 500ms ease-out;
  :hover {
    color: ${({ theme }) => `hsl(${theme.bg})`};
    background-color: ${({ theme }) => `hsl(${theme.fg})`};
  }
`;

export const AlternateBtn = styled(DefaultBtn)`
  color: ${({ theme }) => `hsl(${theme.bg})`};
  background-color: ${({ theme }) => `hsl(${theme.fg})`};
  :hover {
    color: ${({ theme }) => `hsl(${theme.fg})`};
    background-color: ${({ theme }) => `hsl(${theme.bg})`};
  }
`;
