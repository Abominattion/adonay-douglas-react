import PropTypes from "prop-types";
import "./global.css";

function FlyingImage({ src, width, height }) {
  return (
    <img className="FlyingImage" src={src} width={width} height={height} />
  );
}

FlyingImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default FlyingImage;
