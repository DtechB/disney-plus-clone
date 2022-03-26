import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import movies from "../config/data";

function Movie({ title, type }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const data = movies.filter((item) => item.type === type);
    setMovie(data);
  }, [type]);

  return (
    <div className="Movie">
      <h5 className="mb-3">{title}</h5>
      <div className="movieContent">
        {movie.map((item) => (
          <Link to={`/details/${item.slug}`}>
            <MovieItem key={item.title} src={item.cardImg} />
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
