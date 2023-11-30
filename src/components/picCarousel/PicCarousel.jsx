import "./PicCarousel.scss";
import React, { useState, useEffect } from "react";
import image0 from "../../assets/imgs/forCarousel/image0.jpg";
import image1 from "../../assets/imgs/forCarousel/image1.jpg";
import image2 from "../../assets/imgs/forCarousel/image2.jpg";
import image4 from "../../assets/imgs/forCarousel/image4.jpg";
import image5 from "../../assets/imgs/forCarousel/image5.jpg";
import image6 from "../../assets/imgs/forCarousel/image6.jpg";

function PicCarousel() {
  const [currentImage, setCurrentImage] = useState(1);
  const [showArrows, setShowArrows] = useState(true);

  const imageSources = [image0, image1, image2, image4, image5, image6];
  const handleLeftArrowClick = () => {
    setCurrentImage(
      (prevImage) =>
        ((prevImage - 1 + imageSources.length + 1) % imageSources.length) + 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % imageSources.length);
  };
  return (
    <div
      className="carousel"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <img
        src={imageSources[currentImage - 1]}
        alt={`Image ${currentImage + 1}`}
        className="carousel-item"
      />
      {showArrows && (
        <div className="carousel-arrow">
          <div
            className="carousel-arrow carousel-btn carousel-btn__left"
            onClick={handleLeftArrowClick}
          >
            &lt;
          </div>
          <div
            className="carousel-arrow carousel-btn carousel-btn__right"
            onClick={handleRightArrowClick}
          >
            &gt;
          </div>
        </div>
      )}
    </div>
  );
}

export default PicCarousel;
