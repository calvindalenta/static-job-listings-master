import styled from "styled-components";

const StyledFilter = styled.div`
    width: 100%;
    min-height: 10vh;
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    padding: 1em 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default StyledFilter;