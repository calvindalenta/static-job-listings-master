import styled from "styled-components";

const Header = styled.div`
    height: 15vh;
    background-color: ${({theme}) => theme.primary};
    background-image: url("images/bg-header-desktop.svg");

    @media screen and (max-width: 768px) {
        height: 30vh;
        background-image: url("images/bg-header-mobile.svg");
    }
`

export default Header;