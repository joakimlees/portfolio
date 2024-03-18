import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.Styles";
import * as Styled from "./components/styles/index";

export default function App() {
  return (
    <ThemeProvider theme={Styled.theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}
