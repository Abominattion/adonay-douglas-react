import PropTypes from "prop-types";
import "./global.css";

function Button({ href, text, width, height }) {
  const styles = {
    width: width || 100,
    height: height || "auto",
  };

  return (
    <button href={href} className="appBtn" style={styles}>
      {text}
    </button>
  );
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Button;
