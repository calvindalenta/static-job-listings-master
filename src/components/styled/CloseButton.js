import styled from "styled-components";

const CloseButton = styled.p`
    cursor: pointer;
    font-weight: bold;
    color: ${({theme}) => theme.secondary};

    &:hover {
        color: ${({theme}) => theme.primary};
        border-bottom: 2px solid ${({theme}) => theme.primary};
    }
`

export default CloseButton;