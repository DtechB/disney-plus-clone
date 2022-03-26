import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AppButton from "../components/AppButton";
import { PersonFill, PlayFill, Plus } from "react-bootstrap-icons";
import movies from "../config/data";
import { useParams } from "react-router-dom";

function Details() {
  const [data, setData] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    const movie = movies.filter((item) => item.slug === slug);
    setData(movie[0]);
    console.log(data);
  }, [data, slug]);

  return (
    <div className="Details">
      <Background>
        <img src={data.backgroundImg} alt="" />
      </Background>
      <ImageTitle>
        <img src={data.titleImg} alt="" />
      </ImageTitle>
      <Controls>
        <AppButton
          icon={<PlayFill color="black" size={30} />}
          title="Play"
          color="black"
          backgroundColor="rgb(255, 255, 255)"
          padding="5px 20px 5px 10px"
          margin="0 20px 10px 0"
        />
        <AppButton
          icon={<PlayFill color="white" size={30} />}
          title="Trailer"
          color="white"
          backgroundColor="rgba(0, 0, 0, 0.4)"
          border="1px solid white"
          padding="5px 20px 5px 10px"
          margin="0 20px 10px 0"
        />
        <AppButton
          icon={<Plus color="white" size={30} />}
          backgroundColor="rgba(0, 0, 0, 0.6)"
          border="1px solid white"
          borderRadius="50%"
          padding="5px"
          margin="0 20px 10px 0"
        />
        <AppButton
          icon={<PersonFill color="white" size={30} />}
          backgroundColor="black"
          border="1px solid white"
          borderRadius="50%"
          padding="5px"
          margin="0 20px 10px 0"
        />
      </Controls>
      <SubTitle>{data.subTitle}</SubTitle>
      <Description>{data.description}</Description>
    </div>
  );
}

export default Details;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  img {
    width: 35vw;
    min-height: 220px;
    min-width: 280px;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  padding: calc(3.5vw + 5px) 0 0 0;
`;

const SubTitle = styled.p`
  color: white;
  margin-bottom: 10px;
`;

const Description = styled.h5`
  color: white;
  font-weight: 400;
  max-width: 800px;
`;
