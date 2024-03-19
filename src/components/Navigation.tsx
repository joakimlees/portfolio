import * as Styled from "./styles/index";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <Styled.Navigation>
      <ul>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Projects</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>
      <ul className="social-links">
        <li>
          <Link to="#">GH</Link>
        </li>
        <li>
          <Link to="#">In</Link>
        </li>
        <li>
          <Link to="#">IG</Link>
        </li>
        <li>
          <Link to="#">FB</Link>
        </li>
      </ul>
    </Styled.Navigation>
  );
}
