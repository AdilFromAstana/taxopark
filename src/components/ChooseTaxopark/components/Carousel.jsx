import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosStar } from "react-icons/io";
import { MdPercent } from "react-icons/md";
import { LuClock3, LuGift } from "react-icons/lu";
import { FiHeadphones } from "react-icons/fi";
import { PiWallet } from "react-icons/pi";
import { Button, Card, Result } from "antd";
import { FrownOutlined } from "@ant-design/icons";

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const Carousel = ({ items }) => {
  const [carouselItems, setCarouselItems] = useState([]);
  const sliderRef = useRef(null);
  const width = window.innerWidth;

  const getCardCount = () => {
    if (width < 430) {
      return 1.1;
    } else if (width > 430 && width < 768) {
      return 1.5;
    } else if (width > 768 && width < 1024) {
      return 2;
    } else {
      return 3;
    }
  };

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
        infinite={false}
        slidesToShow={getCardCount()}
        slidesToScroll={1}
        ref={sliderRef}
      >
        {carouselItems.map((item, index) => (
          <Card className="carousel-card" key={index}>
            <img
              className="carousel-card-image"
              src={item.image}
              alt={item.title}
            />
            <div className="carousel-card-info">
              <div className="approximate-income-container">
                <div className="approximate-income-title">
                  Приблизительный доход
                </div>
                <div className="approximate-income-value">
                  {formatNumber(item.approximateIncome)} ₸.
                </div>
              </div>
              <h3 className="carousel-card-title">{item.title}</h3>
              <div className="carousel-card-rating">
                <IoIosStar className="carousel-card-icon star" />
                <span>4.8</span>
              </div>
              <div className="carousel-card-detail">
                <MdPercent className="carousel-card-icon" />
                <span>Комиссия {item.commission}%</span>
              </div>
              <div className="carousel-card-detail">
                <LuClock3 className="carousel-card-icon" />
                <span>{item.paymentType}</span>
              </div>
              <div className="carousel-card-detail">
                <FiHeadphones className="carousel-card-icon" />
                <span>{item.supportWorkTime}</span>
              </div>
              <div className="carousel-card-detail">
                <PiWallet className="carousel-card-icon" />
                <span>{item.commissionWithdraw}</span>
              </div>
              <div className="carousel-card-bonuses">
                <LuGift className="carousel-card-icon" />
                <div className="carousel-card-bonus-list">
                  {item.bonuses.map((bonus, idx) => (
                    <span className="carousel-card-bonus" key={idx}>
                      {bonus}
                    </span>
                  ))}
                </div>
              </div>
              <Button className="carousel-card-button" size="large">
                Подробнее
              </Button>
            </div>
          </Card>
        ))}
      </Slider>
    );
  }
};

export default Carousel;
