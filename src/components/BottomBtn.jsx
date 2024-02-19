import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomBtn = ({ text, colorClass, icon, onBtnClick }) => (
  <button
    type="button"
    className={`btn w-100 no-border ${colorClass}`}
    onClick={onBtnClick}
  >
    <FontAwesomeIcon className="me-2" size="lg" icon={icon} />
    {text}
  </button>
);

BottomBtn.propTypes = {
  text: PropTypes.string,
  colorClass: PropTypes.string,
  icon: PropTypes.object.isRequired,
  onBtnClick: PropTypes.func,
};

BottomBtn.defaultProps = {
  text: "新建",
};
export default BottomBtn;
