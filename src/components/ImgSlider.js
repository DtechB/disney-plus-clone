import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

function ImgSlider({ data }) {
  let settings = {
    dots: true,
    infinite: true,
    spped: 500,
    slidesToShow: 1,
    slidestoScroll: 1,
    autoplay: true,
  };
  return (
    <Container {...settings} className="slider mt-3">
      {data.map((item) => (
        <img key={item} src={item} className="imageSlider" alt="" />
      ))}
    </Container>
  );
}

export default ImgSlider;

const Container = styled(Slider)`
  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;
