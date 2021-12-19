import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
// import colors from "../configurations/colors.config";

function configure() {}
/**
 * Primary UI component for user interaction
 */
export const Button = ({ filled, variant, size, label, ...props }) => {
  return (
    <button
      type="button"
      className={[
        "bitcost-button",
        `bitcost-button--${size}`,
        `bitcost-button--${variant}`,
        `bitcost-button--${filled ? "filled" : "outlined"}`,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  filled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary", "critical", "success"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
  label: PropTypes.any.isRequired,
};

Button.defaultProps = {
  filled: true,
  variant: "primary",
  size: "md",
  onClick: undefined,
  label: "Button",
};
