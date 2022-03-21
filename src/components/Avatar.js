import React from "react";

function Avatar({ src }) {
  return (
    <div className="Avatar d-none d-lg-block">
      <img src={src} alt="" />
    </div>
  );
}

export default Avatar;
