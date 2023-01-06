import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        color: white;
        font-family: 'Rubik', sans-serif;
        overflow-x: hidden;
        overflow-y: hidden;
    }
`;

export default GlobalStyles;