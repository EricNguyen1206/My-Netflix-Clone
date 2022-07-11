import PropTypes from "prop-types";
import "./style.scss";

const Button = (props) => {
    return (
        <button className="btn" onClick={props.onClick}>
            {props.children}
        </button>
    );
};
Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
