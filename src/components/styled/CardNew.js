import styled from "styled-components";

const CardNew = styled.span`
    font-size: 0.8em;
    padding: 0.4em 0.5em;
    border-radius: 1em;
    text-transform: uppercase;
    margin-left: 1em;
    color: white;
    background-color: ${({theme}) => theme.primary};
`;

export default CardNew;