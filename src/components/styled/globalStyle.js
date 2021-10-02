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

    @media screen and (max-width: 600px) {
        body {
            font-size: 0.7em;
        }
    }

`

export default GlobalStyle;