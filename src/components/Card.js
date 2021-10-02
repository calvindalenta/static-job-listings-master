import { objectOf, number, string, bool, array, func } from "prop-types";
import StyledCard from "./styled/Card.styled";
import CardLeft from "./styled/CardLeft";
import CardImage from "./styled/CardImage";
import CardInfo from "./styled/CardInfo";
import CardCompany from "./styled/CardCompany";
import CardNew from "./styled/CardNew";
import CardFeatured from "./styled/CardFeatured";
import CardPosition from "./styled/CardPosition";
import Tags from "./styled/Tags";
import TagsItem from "./styled/TagsItem";

export default function Card({ job, onClickTag }) {
    const tags = [job.role, job.level, ...job.tools, ...job.languages].map((tag, index) => <TagsItem key={index} onClick={() => onClickTag(tag)}>{tag}</TagsItem>);
    return (
        <StyledCard featured={job.featured}>
            <CardLeft>
                <CardImage src={job.logo} alt={job.company} />
                <CardInfo>
                    <CardCompany>
                        {job.company}
                        {job.new && <CardNew>New!</CardNew>}
                        {job.featured && <CardFeatured>Featured</CardFeatured>}
                    </CardCompany>
                    <CardPosition>{job.position}</CardPosition>
                    <p>{job.postedAt} • {job.contract} • {job.location}</p>
                </CardInfo>
            </CardLeft>
            <Tags>
                {tags}
            </Tags>
        </StyledCard>
    );
} 

Card.propTypes = {
    job: objectOf(
        number.isRequired,
        string.isRequired,
        string.isRequired,
        bool.isRequired,
        bool.isRequired,
        string.isRequired,
        string.isRequired,
        string.isRequired,
        string.isRequired,
        string.isRequired,
        string.isRequired,
        array.isRequired,
        array.isRequired
    ),
    onClickTag: func.isRequired
}