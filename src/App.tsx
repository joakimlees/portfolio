import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.Styles";
import * as Styled from "./components/styles/index";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";

export default function App() {
  return (
    <ThemeProvider theme={Styled.theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
