import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
    }

    body {
        font-family: 'Spartan', sans-serif;
        font-size: 15px;
        background-color: ${({theme}) => theme.background};
    }
`

export default GlobalStyle;