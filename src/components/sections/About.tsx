import * as Styled from "../styles/index";
import { IconReact, IconStyledComponents, IconGoogleAnalytics } from "../icons";
import { theme } from "../styles/index";

export function About() {
  return (
    <Styled.About>
      <h1>About sectiddon</h1>
      <IconReact size={40} color={theme.color.primaryTeal} />
      <IconStyledComponents size={300} color={theme.color.primaryTeal} />
      <IconGoogleAnalytics size={30} />
    </Styled.About>
  );
}
