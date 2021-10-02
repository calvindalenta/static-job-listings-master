import { objectOf, number, string, bool, array } from "prop-types";
import StyledCard from "./styled/Card.styled";
import CardLeft from "./styled/CardLeft";
import CardImage from "./styled/CardImage";
import CardInfo from "./styled/CardInfo";
import CardCompany from "./styled/CardCompany";
import CardNew from "./styled/CardNew";
import CardFeatured from "./styled/CardFeatured";
import CardPosition from "./styled/CardPosition";

export default function Card({ job }) {
    return (
        <StyledCard>
            <CardLeft>
                <CardImage src={job.logo} alt={job.company} />
                <CardInfo>
                    <CardCompany>
                        {job.company}
                        {job.new && <CardNew>New!</CardNew>}
                        {job.featured && <CardFeatured>Featured</CardFeatured>}
                    </CardCompany>
                    <CardPosition>{job.position}</CardPosition>
                    <p>{job.postedAt} - {job.contract} - {job.location}</p>
                </CardInfo>
            </CardLeft>
            {job.company}
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
    )
}