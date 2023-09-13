import PropTypes from "prop-types";
import "./global.css";

function TittleSecondary({ text, fontSize, textAlign }) {
  const styles = {
    fontSize: fontSize || 18,
  };

  return (
    <div className="textContent" style={{ textAlign: textAlign || "left" }}>
      <h2 style={styles}>{text}</h2>
    </div>
  );
}

TittleSecondary.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  textAlign: PropTypes.string,
};

export default TittleSecondary;
