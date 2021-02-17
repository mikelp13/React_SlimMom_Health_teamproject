import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        transition: all 0.50s linear;
    }

    h2 {
        color: ${({ theme }) => theme.title};
        transition: all 0.50s linear;
    }

    .logo p {
        color: ${({ theme }) => theme.title};
        transition: all 0.50s linear;
    }

    input {
        color: ${({ theme }) => theme.title};
    }
`
    ;