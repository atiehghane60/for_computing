import React from "react";
import Slider from "react-slick";
import "./styles/ImageGallery.css";

const ImageGallery = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="image-gallery">
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i}>
            <img src={src} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageGallery;
