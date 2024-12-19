import React, { useState } from "react";
import { Form, Select, InputNumber, Button } from "antd";

const { Option } = Select;

function CalculateIncome() {
  const [service, setService] = useState("Яндекс");

  const handleSubmit = (values) => {
    console.log("Форма отправлена с данными:", values);
    // Здесь можно добавить логику расчёта
  };

  return (
    <Form
      onFinish={handleSubmit}
      layout="vertical"
      style={{
        padding: "10px",
        width: "40%",
        margin: "0 auto",
      }}
    >
      {/* Заголовок */}
      <h2
        style={{
          color: "#3E3E3E",
          fontSize: "1.5rem",
          marginBottom: "20px",
          textAlign: "left",
          fontWeight: 500,
        }}
      >
        Посчитайте ваш примерный доход
      </h2>

      {/* Выбор города */}
      <Form.Item label="Выберите город" name="city" initialValue="Астана">
        <Select
          size="large"
          showSearch
          style={{
            borderRadius: "12px",
          }}
        >
          <Option value="Астана">Астана</Option>
          <Option value="Алматы">Алматы</Option>
          <Option value="Шымкент">Шымкент</Option>
        </Select>
      </Form.Item>

      {/* Выбор сервиса */}
      <Form.Item
        label="Выберите сервис"
        name="service"
        initialValue={service}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          {["Яндекс", "Uber", "Didi"].map((serviceOption) => (
            <Button
              size="large"
              key={serviceOption}
              type={service === serviceOption ? "primary" : "default"}
              style={{
                width: "100%",
                backgroundColor: service === serviceOption ? "#ffd600" : "#fff",
                color: service === serviceOption ? "#000" : "#333",
                borderRadius: "12px",
              }}
              onClick={() => setService(serviceOption)}
            >
              {serviceOption}
            </Button>
          ))}
        </div>
      </Form.Item>

      {/* Параметры расчёта */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        <Form.Item
          label="Сколько часов в день"
          name="hours"
          initialValue={8}
          style={{ flex: 1 }}
        >
          <InputNumber
            min={1}
            max={24}
            size="large"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </Form.Item>

        <Form.Item label="Сколько дней в неделю" name="days" initialValue={22}>
          <InputNumber
            min={1}
            max={7}
            size="large"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </Form.Item>
      </div>
    </Form>
  );
}

export default CalculateIncome;
