import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    
}

body {
    overflow-x: hidden;
    height: 100%;
}

#root {
    height: 100%;
}


h1, h2, h3, h4, h5 {
  font-family: ${({ theme }) => theme.font.family.heading};
  font-weight: ${({ theme }) => theme.font.weight.bold};
}

h1 {
    font-size: ${({ theme }) => theme.font.size.xxLarge};
}

p {
    font-family: ${({ theme }) => theme.font.family.body};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size:   font-family: ${({ theme }) => theme.font.size.xSmall};

}





`;
