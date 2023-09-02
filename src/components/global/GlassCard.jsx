import PropTypes from "prop-types";
import "./global.css";

function GlassCard({ children }) {
  return <div className="glassCard">{children}</div>;
}

GlassCard.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlassCard;
