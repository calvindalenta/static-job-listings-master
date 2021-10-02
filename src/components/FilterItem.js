import RemoveButton from "./styled/RemoveButton";
import TagsItem from "./styled/TagsItem";
import StyledFilterItem from "./styled/FilterItem.styled";

export default function FilterItem() {

  return (
    <StyledFilterItem>
        <TagsItem>Item</TagsItem>
        <RemoveButton>
            <img src="images/icon-remove.svg" alt="Remove Icon" />
        </RemoveButton>
    </StyledFilterItem>
  );
}