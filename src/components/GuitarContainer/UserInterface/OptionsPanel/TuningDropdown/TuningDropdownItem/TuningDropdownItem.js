import "./TuningDropdownItem.scss";
import PropTypes from "prop-types";

const TuningDropdownItem = ({ tuning, children }) => {
  return <li className="tuningDropdownItem">{children}</li>;
};

TuningDropdownItem.propTypes = {
  tuning: PropTypes.string,
  children: PropTypes.node,
};
export default TuningDropdownItem;
