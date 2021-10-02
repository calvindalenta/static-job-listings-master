import { objectOf, number, string, bool, array } from "prop-types";

export default function Card({ job }) {
    return (
        <>
            {job.company}
        </>
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