import * as Styled from "./styles/index";
import * as Section from "./sections/index";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <Styled.Layout>
      <Section.Header />
      <Outlet />
      <Section.Footer />
    </Styled.Layout>
  );
}
