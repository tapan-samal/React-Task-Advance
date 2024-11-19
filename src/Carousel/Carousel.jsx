  import React, { useEffect, useState } from "react";
  import { images } from "./images";

  const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      let timer;
      if (!isPaused) {
        timer = setInterval(() => {
          setActiveSlide((prevSlide) =>
            prevSlide === images.length - 1 ? 0 : prevSlide + 1
          );
        }, 3000);
      }
      return () => clearInterval(timer);
    }, [isPaused]);

    const handleNextBtnClick = () => {
      setIsPaused(true);
      setActiveSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
      resetTimer();
    };

    const handlePrevBtnClick = () => {
      setIsPaused(true);
      setActiveSlide((prevSlide) =>
        prevSlide === 0 ? images.length - 1 : prevSlide - 1
      );
      resetTimer();
    };

    const resetTimer = () => {
      setTimeout(() => setIsPaused(false), 3000);
    };

    return (
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Carousel</h2>
        <div className="slider">
          <img
            src={images[activeSlide].url}
            alt={images[activeSlide].altText}
            className="image-style"
          />
          <h2>{images[activeSlide].caption}</h2>
          <div className="btns">
            <button onClick={handlePrevBtnClick}>Prev</button>
            <button onClick={handleNextBtnClick}>Next</button>
          </div>
        </div>
      </div>
    );
  };

  export default Carousel;
