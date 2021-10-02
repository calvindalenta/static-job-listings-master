import RemoveButton from "./styled/RemoveButton";
import TagsItem from "./styled/TagsItem";
import StyledFilterItem from "./styled/FilterItem.styled";

export default function FilterItem({ itemName, onClick }) {

  return (
    <StyledFilterItem>
        <TagsItem>{itemName}</TagsItem>
        <RemoveButton onClick={() => onClick(itemName)}>
            <img src="images/icon-remove.svg" alt="Remove Icon" />
        </RemoveButton>
    </StyledFilterItem>
  );
}