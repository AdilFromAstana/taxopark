import { Typography } from "antd";
import carImage from "../../images/car.png";
import "./MainTitle.css";

function MainTitle() {
  return (
    <div className="main-section-container">
      <div className="main-section-text">
        <Typography.Title className="main-section-title">
          Выбери свой <span className="highlight">Таксо</span>парк
        </Typography.Title>
        <Typography.Text className="main-section-desc">
          Огромный выбор автопарков
        </Typography.Text>
        <Typography.Text className="main-section-desc">
          Фильтры по поиску выгодных условий
        </Typography.Text>
        <Typography.Text className="main-section-desc">
          Постоянная поддержка
        </Typography.Text>
        <Typography.Text className="main-section-desc">
          Выбрал и подключился
        </Typography.Text>
      </div>
      <img src={carImage} alt="car" className="main-section-image" />
    </div>
  );
}

export default MainTitle;
