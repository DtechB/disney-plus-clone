import React from "react";

function NavItem({ text, icon }) {
  return (
    <div className="NavItem">
      <img src={icon} alt="" />
      <span>{text}</span>
    </div>
  );
}

export default NavItem;
