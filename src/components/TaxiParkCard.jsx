import React from "react";
import { Card, Button } from "antd";
import taxoparkLogo from "../images/taxopark-logo.png";

function TaxiParkCard() {
  return (
    <Card
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "0 auto",
        maxWidth: "40%",
      }}
      styles={{
        body: {
          padding: 0,
        },
      }}
    >
      {/* Верхний блок */}
      <div
        style={{
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "60% 40%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <div
            style={{
              margin: 0,
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            ТАКСОПАРК АЛГА
          </div>
          <span style={{ color: "#666", fontSize: "18px", textAlign: "left" }}>
            Удобный и оптимальный тариф для вашего сотрудничества
          </span>
          <span
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            2,99%{" "}
            <span style={{ fontSize: "0.8rem", fontWeight: "normal" }}>
              с заказа
            </span>
          </span>
        </div>
        <img
          src={taxoparkLogo} // Замените на логотип таксопарка
          alt="Alga Logo"
        />
      </div>

      {/* Кнопка и дополнительная информация */}
      <div
        style={{
          backgroundColor: "#333",
          color: "white",
          borderRadius: "10px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Button
          type="primary"
          size="large"
          style={{
            width: "100%",
            backgroundColor: "#ffd600",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "5px",
            marginBottom: "15px",
          }}
        >
          Подробное
        </Button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <span style={{ fontSize: "16px" }}>Банковские комиссии:</span>
            <b style={{ fontSize: "20px" }}>2%, мин. 500 ₽</b>
            <span style={{ fontSize: "14px" }}>на карту любого банка</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default TaxiParkCard;
