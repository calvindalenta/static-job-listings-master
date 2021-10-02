import styled from "styled-components";

const CardLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;

    @media screen and (max-width: 1024px) {
        border-bottom: 1px solid black;
    }
`;

export default CardLeft;