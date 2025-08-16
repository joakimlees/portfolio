import * as Styled from "../styles/index";
import { IconReact } from "../icons";
import { theme } from "../styles/index";

export function About() {
  return (
    <Styled.About>
      <h1>About sectiddon</h1>
      <IconReact size={40} color={theme.color.primaryTeal} />
    </Styled.About>
  );
}
