import React from "react";
import { Input, Button, Checkbox } from "antd";

function SubmitRequest() {
  return (
    <div
      style={{
        width: "50vw",
        margin: "0px auto",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
          padding: "20px 40px",
          margin: " 50px 0px",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", textAlign: "center", margin: 0 }}>
          Оставить заявку
        </h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="Ваше имя"
            style={{
              flex: 1,
              borderRadius: "5px",
              height: "45px",
              padding: "10px",
            }}
          />
          <Input
            placeholder="Номер телефона"
            style={{
              flex: 1,
              borderRadius: "5px",
              height: "45px",
              padding: "10px",
            }}
          />
          <Button
            type="primary"
            style={{
              backgroundColor: "#333",
              color: "#fff",
              borderRadius: "5px",
              height: "45px",
              padding: "0 20px",
            }}
          >
            Мне нужна консультация
          </Button>
        </div>
        <Checkbox style={{ alignSelf: "flex-start" }}>
          Даю согласие на обработку{" "}
          <a
            href="/"
            style={{
              color: "#000",
              textDecoration: "underline",
            }}
          >
            персональных данных
          </a>
        </Checkbox>
      </div>
    </div>
  );
}

export default SubmitRequest;
