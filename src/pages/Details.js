import React from "react";
import styled from "styled-components";
import AppButton from "../components/AppButton";
import { PersonFill, PlayFill, Plus } from "react-bootstrap-icons";

function Details() {
  return (
    <div className="Details">
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt=""
        />
      </Background>
      <ImageTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
          alt=""
        />
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
      <SubTitle>2018 • 7m • Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        A Chinese mom who’s sad when her grown son leaves home gets another
        chance at motherhood when one of her dumplings springs to life. But she
        finds that nothing stays cute and small forever.
      </Description>
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
