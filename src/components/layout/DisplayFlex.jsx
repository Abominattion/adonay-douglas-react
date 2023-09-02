import PropTypes from "prop-types";
import "./layout.css";

function DisplayFlex({ children, justifyContent, alignItems, gap, height }) {
  const containerStyles = {
    display: "flex",
    justifyContent: justifyContent || "flex-start",
    alignItems: alignItems || "stretch",
    gap: gap || 0,
    height: height || "auto",
  };

  return <div style={containerStyles}>{children}</div>;
}

DisplayFlex.propTypes = {
  children: PropTypes.element.isRequired,
  justifyContent: PropTypes.string.isRequired,
  alignItems: PropTypes.string.isRequired,
  gap: PropTypes.number.isRequired,
  height: PropTypes.string.isRequired,
};

export default DisplayFlex;
