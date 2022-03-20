import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    /* general reset */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    a {
        text-decoration: none;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Lato", sans-serif;
    }

    /* color utility classes */
    :root {
        /* colors */
        --clr-dark: 199, 55, 15;
        --clr-yellow: 51, 90, 81;
        --clr-light-blue: 201, 93, 89;
        --clr-dark-blue: 189, 100, 16;
        --clr-orange: 21, 100, 72;

        /* font-sizes */
        --fs-800: 6.4rem;
        --fs-600: 2.6rem;
        --fs-500: 2.4rem;
        --fs-400: 1.8rem;
        --fs-300: 1.6rem;
        --fs-200: 1.3rem;
    }

    /* font utility classes */

`;
