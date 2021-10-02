import styled from "styled-components";

const StyledCard = styled.div`
    width: 100%;
    background-color: white;
    padding: 2em;
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 1em;
        position: relative;
        padding: 2em;
    }
`

export default StyledCard;