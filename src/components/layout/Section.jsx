import PropTypes from "prop-types";
import "./layout.css";

function Section({ children }) {
  return <section>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Section;
