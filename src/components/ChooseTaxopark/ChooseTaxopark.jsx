import { useState } from "react";
import Carousel from "./components/Carousel";
import Filters from "./components/Filters";
import { Button, Drawer } from "antd";
import "./ChooseTaxopark.css";

const ChooseTaxopark = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="carousel-wrapper">
      <div className="choose-taxopark-title">
        <h2>Выберите лучший таксопарк</h2>
        <span>
          Сравните комиссии, скорость выплат и бонусы разных таксопарков
        </span>
      </div>
      <div className="desktop-filters">
        <Filters setFilteredItems={setFilteredItems} />
      </div>
      <div className="carousel-header">
        <h3 className="carousel-count">
          Найдено таксопарков: {filteredItems.length}
        </h3>
        <Button
          className="carousel-filters-button"
          onClick={() => setIsDrawerOpen(true)}
          type="primary"
        >
          Расчитать доход
        </Button>
      </div>
      <Carousel items={filteredItems} />
      <Drawer
        open={isDrawerOpen}
        title="Расчитать доход"
        onClose={() => setIsDrawerOpen(false)}
        className="carousel-drawer"
      >
        <Filters setFilteredItems={setFilteredItems} />
        <Button
          className="drawer-apply-button"
          size="large"
          type="primary"
          onClick={() => setIsDrawerOpen(false)}
        >
          Применить
        </Button>
      </Drawer>
    </div>
  );
};

export default ChooseTaxopark;
