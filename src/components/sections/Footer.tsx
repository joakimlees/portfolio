import * as Styled from "../styles/index";
import { FadeInOnScroll } from "../FadeOnScroll";

export function Footer() {
  return (
    <FadeInOnScroll>
      <Styled.Footer>
        <Styled.CSContainer>
          <div className="footer-split-container">
            <div className="footer-left">
              <p>&copy; 2025 joakimlees.com</p>

              <p>
                <small>
                  Icons by Font Awesome (CC BY 4.0) · Font Awesome Free v7.0.0
                  by Font Awesome · License:{" "}
                  <a
                    href="https://fontawesome.com/license/free"
                    rel="noopener noreferrer"
                  >
                    fontawesome.com/license/free
                  </a>{" "}
                  · Copyright 2025 Fonticons, Inc.
                </small>
              </p>

              <p>
                <small>
                  Icons for GitHub and styled-components are used under the MIT
                  License.
                </small>
              </p>

              <p>
                <small>
                  All other technology logos are used under their official brand
                  or public resources.
                </small>
              </p>
            </div>
            <div className="footer-right">
              <p>
                Initially crafted in Figma and brought to life in Visual Studio
                Code. Built with React, Vite & TypeScript, styled with CSS
                Modules. Deployed with x
              </p>
            </div>
          </div>
        </Styled.CSContainer>
      </Styled.Footer>
    </FadeInOnScroll>
  );
}
