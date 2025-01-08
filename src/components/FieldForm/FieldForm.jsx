import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import vk from "../../images/vk.svg";
import youtube from "../../images/youtube.svg";
import whatsApp from "../../images/whatsapp.svg";
import email from "../../images/email.svg";
import PhoneInput from "react-phone-input-2";
import "./FieldForm.css";

function FieldForm() {
  const [number, setNumber] = useState("+7");

  const submit = () => {};

  return (
    <div className="field-form">
      <div className="field-form-header">
        <div className="field-form-content">
          <div className="field-form-left">
            <h1 className="field-form-title">Выбирай лучший ТаксоПарк!</h1>
            <p className="field-form-description">
              Сравнивайте и выбирайте лучшие условия для работы!
            </p>
          </div>

          <div className="field-form-right">
            <h2 className="field-form-form-title">Получить консультацию!</h2>
            <Form
              layout="vertical"
              className="field-form-form"
              onFinish={(values) => console.log("Submitted: ", values)}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Введите ваше имя" }]}
              >
                <Input placeholder="Ваше имя" size="large" />
              </Form.Item>

              <Form.Item name="phone">
                <PhoneInput
                  disableDropdown
                  onlyCountries={["kz"]}
                  country={"kz"}
                  value={number}
                  prefix="+"
                  onChange={(e) => {
                    console.log("e: ", e);
                    setNumber(e);
                  }}
                />
              </Form.Item>

              <Form.Item name="agreement" valuePropName="checked">
                <Checkbox>
                  <div className="field-form-form-checkbox">
                    Даю согласие на обработку{" "}
                    <a href="/" className="field-form-link">
                      персональных данных
                    </a>
                  </div>
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="field-form-button"
                  size="large"
                >
                  Отправить
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

      <div className="field-form-footer">
        <div className="field-form-footer-content">
          <div className="footer-contact">
            <p className="footer-phone">8 770 777 77 77</p>
            <p className="footer-hours">Круглосуточно</p>
          </div>
          <div className="footer-email">
            <Button size="large" className="footer-email-button">
              <img src={email} alt="email" />
              <span>Написать на почту</span>
            </Button>
          </div>
          <div className="footer-social">
            <a href="/whatsApp" className="footer-social-link">
              <img src={whatsApp} alt="whatsApp" />
            </a>
            <a href="/vk" className="footer-social-link">
              <img src={vk} alt="vk" />
            </a>
            <a href="/youtube" className="footer-social-link">
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
      </div>

      <div className="field-form-legal">
        <div className="field-form-legal-content">
          <a href="/privacy" className="legal-link">
            Политика конфиденциальности
          </a>
          <a href="/offer" className="legal-link">
            Договор оферты
          </a>
        </div>
      </div>
    </div>
  );
}

export default FieldForm;
