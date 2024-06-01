import PropTypes from "prop-types";
import styles from "./Button.module.css";
const Button = ({ icon, text, isOutline }) => {
  return (
    <button className={isOutline ? styles.outlineBtn : styles.primaryBtn}>
      {icon}
      {text}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  isOutline: PropTypes.bool,
};

export default Button;
