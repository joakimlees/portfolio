import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styles";
import * as Styles from "./components/styles/index";

export default function App() {
  return (
    <ThemeProvider theme={Styles.theme}>
      <GlobalStyles />
      <div>
        <h1>Hello world</h1>
      </div>
    </ThemeProvider>
  );
}
