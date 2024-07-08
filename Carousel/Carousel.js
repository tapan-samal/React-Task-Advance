import React, { useEffect, useState } from "react";
import "./carousel.css";

const Carousel = () => {
  const items = [   
    {
      url: "https://picsum.photos/id/123/1200/400",
      altText: "Slide 1",
      caption: "Water Drop",
      key: 1,
    },
    {
      url: "https://picsum.photos/id/456/1200/400",
      altText: "Slide 2",
      caption: "Lake",
      key: 2,
    },
    {
      url: "https://picsum.photos/id/678/1200/400",
      altText: "Slide 3",
      caption: "Hills",
      key: 3,
    },
  ];

  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextBtnClick();
    }, 3000);
    return () => clearInterval(timer);
  }, [activeSlide]);

  const handleNextBtnClick = () => {
    if (activeSlide === items.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide((activeSlide) => activeSlide + 1);
    }
  };

  const handlePrevBtnClick = () => {
    if (activeSlide === 0) {
      setActiveSlide(items.length - 1);
    } else {
      setActiveSlide((activeSlide) => activeSlide - 1);
    }
  };
  return (
    <>
      <h2>Carousel :</h2>
      <div className="container">
        <img
          src={items[activeSlide].url}
          alt={items[activeSlide].altText}
          height={404}
        />
        <h2>{items[activeSlide].caption}</h2>
      <div className="buttn">
        <button onClick={handlePrevBtnClick}>Prev</button>
        <button onClick={handleNextBtnClick}>Next</button>
      </div>
      </div>
    </>
  );
};

export default Carousel;
