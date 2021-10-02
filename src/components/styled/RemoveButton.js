import styled from "styled-components";

const RemoveButton = styled.div`
    cursor: pointer;
    width: 1.5em;
    background-color: ${({theme}) => theme.primary};

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${({theme}) => theme.primaryDark}
    }
`

export default RemoveButton;