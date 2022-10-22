import React from "react";
import img1 from "../../Shared/Image/2001.i039.031_branding_isometric_concept_icons-14.jpg";
import img2 from "../../Shared/Image/Wavy_Bus-03_Single-10.jpg";

const BrandCarousel = () => {
  return (
    <div>
      <div className="carousel w-96 rounded-xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" alt="brand-img" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" alt="brand-img" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
