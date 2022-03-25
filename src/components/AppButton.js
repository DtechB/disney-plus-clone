import React from "react";
import {} from "react-bootstrap-icons";

function AppButton({
  title,
  icon,
  backgroundColor,
  color,
  border = "none",
  borderRadius = "5px",
  padding,
}) {
  return (
    <button
      className="AppButton"
      style={{ backgroundColor, color, border, borderRadius, padding }}
    >
      {icon && icon}
      {title && <span>{title}</span>}
    </button>
  );
}

export default AppButton;
