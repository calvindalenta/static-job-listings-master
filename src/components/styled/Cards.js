import styled from "styled-components";

const Cards = styled.div`
    width: 80%;
    margin: 3em auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3em;
    /* border: 1px solid red; */

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`

export default Cards;