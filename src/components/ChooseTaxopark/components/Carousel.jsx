import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Result } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import CarouselItem from "./CarouselItem/CarouselItem";

const getCardCount = (width = 479) => {
  if (width <= 480) {
    return 1.1;
  } else if (width > 480 && width < 768) {
    return 1.5;
  } else if (width > 768 && width < 1024) {
    return 2;
  } else {
    return 3;
  }
};

const Carousel = ({ items }) => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [carouselDisabled, setCarouselDisabled] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(
    getCardCount(window.innerWidth)
  );
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getCardCount(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setCarouselItems(items);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [items]);

  if (carouselItems.length === 0) {
    return (
      <Result
        className="carousel-empty-result"
        title="К срожалению таксопарков по вашему фильтру не нашлось!"
        icon={<FrownOutlined />}
      />
    );
  } else {
    return (
      <Slider
        className="carousel-slider"
        dots={false}
        swipe={!carouselDisabled}
        infinite={false}
        slidesToShow={slidesToShow}
        slidesToScroll={1}
        ref={sliderRef}
      >
        {carouselItems.map((item, index) => (
          <CarouselItem
            key={item.title}
            index={index}
            item={item}
            setCarouselDisabled={setCarouselDisabled}
            // isModalOpen={isModalOpen}
          />
        ))}
      </Slider>
    );
  }
};

export default Carousel;
