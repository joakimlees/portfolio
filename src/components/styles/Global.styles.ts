import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
    height: 100vh;
    margin 0px; 
}

h1 {
    font-size: ${({ theme }) => theme.font.size.large};
    color: ${({ theme }) => theme.color.darkPurple};
    font-family: ${({ theme }) => theme.font.family.heading};
}





`;
