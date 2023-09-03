import PropTypes from "prop-types";
import "./layout.css";

function FlexBasis({ children, flexBasis }) {
  return (
    <div
      className="flexBasis"
      style={{ flexBasis: `calc(100% / ${flexBasis})` }}
    >
      {children}
    </div>
  );
}

FlexBasis.propTypes = {
  children: PropTypes.element.isRequired,
  flexBasis: PropTypes.number.isRequired,
};

export default FlexBasis;
