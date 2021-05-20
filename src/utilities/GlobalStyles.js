import { createGlobalStyle } from "styled-components";

const GlobalFontStyles = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        margin:0;
        padding:0;
    }
    input:focus,
    select:focus {
        outline: none;
    }
`;

export default GlobalFontStyles;
