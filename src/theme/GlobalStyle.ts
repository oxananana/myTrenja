import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";
import reset from "./styled-reset";
import normalize from "./styled-normalize";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${reset}
  ${normalize}

  html {
    height: -webkit-fill-available;
    @supports (-webkit-touch-callout: none) {
    /* The hack for Safari */
      height: -webkit-fill-available;
    }
  }

  body {
    font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.bg.baseGrey};
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.text.base};
  }

  p {
    margin: 12px 0;
  }

  img {
    max-width: 100%;
  }

  svg {
    display: block;
    /* width: 16px;
    height: 16px; */
    fill: currentColor;
    fill-rule: evenodd;
    clip-rule: evenodd;

  }

  input, textarea, select {
    border: 1px solid transparent;

    &:hover {
      border-color: ${({ theme }) => theme.border.inputHover}
    }
  }
`;

export default GlobalStyle;
