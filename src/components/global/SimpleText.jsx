import PropTypes from "prop-types";
import "./global.css";

function SimpleText({ text, fontSize, textAlign }) {
  const styles = {
    fontSize: fontSize || 18,
  };

  return (
    <div className="textContent" style={{ textAlign: textAlign || "left" }}>
      <p style={styles}>{text}</p>
    </div>
  );
}

SimpleText.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  textAlign: PropTypes.string.isRequired,
};

export default SimpleText;
