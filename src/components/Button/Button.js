import { LoadMore } from "./Button.styled";
import PropTypes from "prop-types";

export const Button = ({ onLoad }) => {
    return <LoadMore type="button" onClick={onLoad}>Load more</LoadMore>
}

Button.propTypes = {
onLoad: PropTypes.func.isRequired,
}