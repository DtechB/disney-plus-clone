import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Movie({ title, data }) {
  return (
    <div className="Movie">
      <h5 className="mb-3">{title}</h5>
      <div className="movieContent">
        {data.map((item) => (
          <Link to="/details">
            <MovieItem key={item} src={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movie;

const MovieItem = styled.img`
  width: 100%;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    border-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }
`;
