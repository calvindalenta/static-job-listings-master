import RemoveButton from "./styled/RemoveButton";
import TagsItem from "./styled/TagsItem";
import StyledFilterItem from "./styled/FilterItem.styled";

export default function FilterItem({ itemName, index, onClick }) {

  return (
    <StyledFilterItem>
        <TagsItem>{itemName}</TagsItem>
        <RemoveButton onClick={() => onClick(index)}>
            <img src="images/icon-remove.svg" alt="Remove Icon" />
        </RemoveButton>
    </StyledFilterItem>
  );
}