import { objectOf, number, string, bool, array } from "prop-types";
import StyledCard from "./styled/Card.styled";

export default function Card({ job }) {
    return (
        <StyledCard>
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