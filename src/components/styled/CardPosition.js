import styled from "styled-components";

const CardPosition = styled.h3`
    cursor: pointer;
    color: ${({theme}) => theme.primaryDark}; 

    &:hover {
        color: ${({theme}) => theme.primary}
    }
`;

export default CardPosition;