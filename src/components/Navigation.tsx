import * as Styled from "./styles/index";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  facebookIcon,
  githubIcon,
  instagramIcon,
  linkedinIcon,
} from "../build/icons/index";

type navProps = {
  menuState: boolean;
};

export function Nav({ menuState }: navProps) {
  useEffect(() => {
    if (menuState === true) {
      console.log("useEffect true");
    } else {
      console.log("useEffect false");
    }
  }, [menuState]);

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
          <Link to="#">
            <img src={githubIcon} alt="github logo" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={linkedinIcon} alt="linkedin logo" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={facebookIcon} alt="facebook logo" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={instagramIcon} alt="instagram logo" />
          </Link>
        </li>
      </ul>
    </Styled.Navigation>
  );
}
