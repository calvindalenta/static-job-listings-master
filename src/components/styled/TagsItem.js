import styled from "styled-components";

const TagsItem = styled.div`
    cursor: pointer;
    font-size: 0.9em;
    padding: 0.4em;
    background-color: ${({theme}) => theme.tabletBackground};
    color: ${({theme}) => theme.primary};
    font-weight: bold;
    border-radius: ${({theme}) => theme.borderRadius};

    &:hover {
        background-color: ${({theme}) => theme.primary};
        color: white;
    }
`

export default TagsItem;