import PropTypes from "prop-types";
import "./style.scss";
const ButtonSecondary = (props) => {
    return (
        <button className="btn-secondary" onClick={props.onClick}>
            {props.children}
        </button>
    );
};
ButtonSecondary.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
};

export default ButtonSecondary;
