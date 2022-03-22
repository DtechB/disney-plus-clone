import React from "react";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";

const sliderData = [
  "/images/slider-badag.jpg",
  "/images/slider-badging.jpg",
  "/images/slider-scale.jpg",
  "/images/slider-scales.jpg",
];

const viewerData = [
  "/images/viewers-disney.png",
  "/images/viewers-pixar.png",
  "/images/viewers-marvel.png",
  "/images/viewers-starwars.png",
  "/images/viewers-national.png",
];

function Home() {
  return (
    <main className="Home">
      <ImgSlider data={sliderData} />
      <Viewers data={viewerData} />
    </main>
  );
}

export default Home;
