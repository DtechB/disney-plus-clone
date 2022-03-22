import React from "react";
import styled from "styled-components";

function Viewers({ data }) {
  return (
    <div className="Viewers">
      {data.map((item) => (
        <ViewerItem key={item} src={item} />
      ))}
    </div>
  );
}

export default Viewers;

const ViewerItem = styled.img`
  width: 18%;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    border-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }
`;
