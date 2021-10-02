import styled from "styled-components";

const CardImage = styled.img`
    display: flex;
    align-items: center;
    gap: 1em;

    @media screen and (max-width: 1024px) {
        position: absolute;
        top: -2em;
        width: 4em;
    }
`;

export default CardImage;