import { Typography } from "antd";
import carImage from "../images/car.png";

function ChooseTaxopark() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #525252, #202020)",
        padding: "5vw 17.5vw",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2vw", // Расстояние между текстом и изображением
      }}
    >
      <div
        style={{
          position: "absolute", // Текст поверх изображения
          top: "10%", // Регулируем позицию текста по вертикали
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography.Title
          style={{
            color: "white",
            fontSize: "4rem",
          }}
        >
          Выбери свой <span style={{ color: "#FFDD00" }}>Таксо</span>парк
        </Typography.Title>
        <Typography.Text
          style={{ color: "white", display: "block", margin: "5px 0" }}
        >
          Огромный выбор автопарков
        </Typography.Text>
        <Typography.Text
          style={{ color: "white", display: "block", margin: "5px 0" }}
        >
          Фильтры по поиску выгодных условий
        </Typography.Text>
        <Typography.Text
          style={{ color: "white", display: "block", margin: "5px 0" }}
        >
          Постоянная поддержка
        </Typography.Text>
        <Typography.Text
          style={{ color: "white", display: "block", margin: "5px 0" }}
        >
          Выбрал и подключился
        </Typography.Text>
      </div>
      <img
        src={carImage}
        alt="car"
        style={{
          width: "60%",
          height: "auto",
          zIndex: 1, // Изображение за текстом
          marginLeft: "auto", // Отодвигаем машину вправо
        }}
      />
    </div>
  );
}

export default ChooseTaxopark;
