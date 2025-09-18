import * as Styled from "../styles/index";
import { FadeInOnScroll } from "../FadeOnScroll";

export function Footer() {
  return (
    <FadeInOnScroll>
      <Styled.Footer>
        <div>Footer</div>
        <p>
          Icons by Font Awesome (CC BY 4.0) Icons by Font Awesome (CC BY 4.0)
          Font Awesome Free v7.0.0 by @fontawesome License:
          https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.
        </p>
        <p>
          Icons for GitHub and styled-components are used under the MIT License.
          <br />
          All other technology logos are used under their official brand or
          public resources.
        </p>
      </Styled.Footer>
    </FadeInOnScroll>
  );
}
