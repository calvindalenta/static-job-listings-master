import styled from "styled-components";

const CardInfo = styled.div`
    padding-block: 5px;
    color: ${({theme}) => theme.primaryDark};

    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;

    p {
        color: ${({theme}) => theme.secondary};
    }
`;

export default CardInfo;