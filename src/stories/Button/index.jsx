import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
// import colors from "../configurations/colors.config";

function configure() {}
/**
 * Primary UI component for user interaction
 */
export const Button = ({ outlined, variant, size, label, ...props }) => {
  return (
    <button
      type="button"
      className={[
        "bitcost-button",
        `bitcost-button--${size}`,
        `bitcost-button--${variant}`,
        `bitcost-button--${outlined ? "outlined" : "filled"}`,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  outlined: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary", "critical", "success"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
  label: PropTypes.any.isRequired,
};

Button.defaultProps = {
  outlined: false,
  variant: "primary",
  size: "sm",
  onClick: undefined,
  label: "Button",
};
