import React from "react";
import ImgSlider from "./ImgSlider";

const data = [
  "/images/slider-badag.jpg",
  "/images/slider-badging.jpg",
  "/images/slider-scale.jpg",
  "/images/slider-scales.jpg",
];

function Home() {
  return (
    <main className="Home">
      <ImgSlider data={data} />
    </main>
  );
}

export default Home;
