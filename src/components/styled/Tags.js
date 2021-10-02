import styled from "styled-components";

const Tags = styled.div`
    display: flex;
    justify-content: right;
    flex-wrap: wrap;
    gap: 1em;

    @media screen and (max-width: 1024px){
        justify-content: left;
    }
`

export default Tags;