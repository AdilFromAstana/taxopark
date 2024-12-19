import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import footerBg from "../images/footer-bg.png";
import playMarket from "../images/play-market.png";
import appStore from "../images/app-store.png";
import vk from "../images/vk.svg";
import youtube from "../images/youtube.svg";
import whatsApp from "../images/whatsapp.svg";
import email from "../images/email.svg";

function AppPromotion() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "50px 0px",
        }}
      >
        <div
          style={{
            width: "50%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {/* Левый блок: Описание и кнопки */}
          <div
            style={{
              maxWidth: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h1
                style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}
              >
                Выбирай лучший ТаксоПарк!
              </h1>
              <p style={{ fontSize: "1.2rem", color: "#555" }}>
                Преимущества приложения
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p style={{ marginTop: "20px", fontWeight: "bold" }}>
                Скачать приложение
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <img
                  src={playMarket}
                  alt="Google Play"
                  style={{ width: "150px", cursor: "pointer" }}
                />
                <img
                  src={appStore}
                  alt="App Store"
                  style={{ width: "150px", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>

          {/* Правый блок: Форма */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              maxWidth: "40%",
            }}
          >
            <h2
              style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}
            >
              Подключиться онлайн
            </h2>
            <Form
              layout="vertical"
              style={{ marginTop: "20px" }}
              onFinish={(values) => console.log("Submitted: ", values)}
            >
              <Form.Item
                rules={[{ required: true, message: "Введите ваше имя" }]}
              >
                <Input placeholder="Ваше имя" size="large" />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: "Введите номер телефона" }]}
              >
                <Input placeholder="Номер телефона" size="large" />
              </Form.Item>
              <Form.Item name="agreement" valuePropName="checked">
                <Checkbox>
                  Даю согласие на обработку{" "}
                  <a href="/" style={{ color: "#333" }}>
                    персональных данных
                  </a>
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: "#333",
                    color: "#fff",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                  size="large"
                >
                  Подключиться
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      {/* Нижняя часть */}
      <div style={{ backgroundColor: "#fff", padding: "20px 0" }}>
        <div
          style={{
            width: "60%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <p
              style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#333" }}
            >
              8 770 777 77 77
            </p>
            <p style={{ color: "#555" }}>Круглосуточно</p>
          </div>
          <div>
            <Button
              size="large"
              type="default"
              style={{
                border: "1px solid #ccc",
                borderRadius: "16px",
                padding: "5px 15px",
              }}
            >
              <img src={email} alt="email" />
              <span>Написать на почту</span>
            </Button>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="/whatsApp" style={{ fontSize: "1.5rem", color: "#333" }}>
              <img src={whatsApp} alt="whatsApp" />
            </a>
            <a href="/vk" style={{ fontSize: "1.5rem", color: "#333" }}>
              <img src={vk} alt="vk" />
            </a>
            <a href="/youtube" style={{ fontSize: "1.5rem", color: "#333" }}>
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#f4f4f4", padding: "20px 0" }}>
        <div
          style={{
            width: "60%",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <a href="/privacy" style={{ color: "#555", fontSize: "0.9rem" }}>
            Политика конфиденциальности
          </a>
          <a href="/offer" style={{ color: "#555", fontSize: "0.9rem" }}>
            Договор оферты
          </a>
        </div>
      </div>
    </div>
  );
}

export default AppPromotion;
