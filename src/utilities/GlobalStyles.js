import { createGlobalStyle } from "styled-components";

const GlobalFontStyles = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
    }
    input:focus,
    select:focus {
        outline: none;
    }
`;

export default GlobalFontStyles;
