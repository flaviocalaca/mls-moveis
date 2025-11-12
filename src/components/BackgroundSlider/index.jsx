import { useState, useEffect } from "react";
import { getImages } from "../../utils/getImages";
import { BackgroundImage, SliderWrapper } from "./styles";

const INTERVAL_MS = 8000;

function BackgroundSlider({ items, children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = (items || [])
    .filter((item) => item.backdrop_path)
    .slice(0, 5)
    .map((item) => getImages(item.backdrop_path));


  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, INTERVAL_MS);

      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <SliderWrapper>
      {images.map((imgUrl, index) => (
        <BackgroundImage
          key={imgUrl}
          $imgUrl={imgUrl}
          $active={index === currentIndex}
        />
      ))}

      {children}
    </SliderWrapper>
  );
}

export default BackgroundSlider;
