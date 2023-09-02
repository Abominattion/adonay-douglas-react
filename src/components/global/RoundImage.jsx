import PropTypes from "prop-types";
import "./global.css";

function RoundImage({ src, width, height, textAlign }) {
  return (
    <div className="textContent" style={{ textAlign: textAlign || "left" }}>
      <img className="rounded-image" src={src} width={width} height={height} />
    </div>
  );
}

RoundImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  textAlign: PropTypes.number.isRequired,
};

export default RoundImage;
