import styled from "styled-components";

const TagsItem = styled.div`
    cursor: pointer;
    padding: 0.3em;
    background-color: ${({theme}) => theme.tabletBackground};
    color: hsl(180, 29%, 50%);
    font-weight: bold;

    &:hover {
        background-color: ${({theme}) => theme.primary};
        color: white;
    }
`

export default TagsItem;