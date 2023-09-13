import PropTypes from "prop-types";
import "./global.css";

function Anchor({ href, text, fontSize }) {
  const styles = {
    fontSize: fontSize || 18,
  };

  return (
    <a style={styles} href={href}>
      {text}
    </a>
  );
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
};

export default Anchor;
