import { createGlobalStyle } from "styled-components";

import "./tailwindGlobal.css";
import "react-loading-skeleton/dist/skeleton.css";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;

export default GlobalStyles;
