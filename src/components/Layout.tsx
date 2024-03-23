import * as Styled from "./styles/index";
import { Header, Footer } from "./index";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <Styled.Layout>
      <Header />
      <Outlet />
      <Footer />
    </Styled.Layout>
  );
}
