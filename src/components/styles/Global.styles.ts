import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0px;
    padding: 0px;
}

body {
    height: 100vh;
}

#root {
    height: 100%;
}

main {
    height: 100%;
}



h1 {
    font-size: ${({ theme }) => theme.font.size.large};
    color: ${({ theme }) => theme.color.darkPurple};
    font-family: ${({ theme }) => theme.font.family.heading};
}





`;
