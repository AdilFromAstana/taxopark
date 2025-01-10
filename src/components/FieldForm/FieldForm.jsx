import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import vk from "../../images/vk.svg";
import youtube from "../../images/youtube.svg";
import whatsApp from "../../images/whatsapp.svg";
import email from "../../images/email.svg";
import PhoneInput from "react-phone-input-2";
import "./FieldForm.css";
import SupportModal from "./SupportModal/SupportModal";

function FieldForm() {
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              onFinish={() => {
                setIsModalOpen(true);
                setStep(2); // Перейти на второй шаг
              }}
            >
              <Form.Item
                label="ФИО"
                name="name"
                rules={[{ required: true, message: "Пожалуйста, введите ФИО" }]}
              >
                <Input placeholder="Введите ФИО" />
              </Form.Item>
              <Form.Item
                label="Телефон"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста, введите номер телефона",
                  },
                ]}
              >
                <PhoneInput
                  country="kz"
                  onlyCountries={["kz"]}
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  placeholder="+7-777-77-77-77"
                  disableDropdown={true} // Отключение смены флага
                  masks={{ kz: "(...) ...-..-.." }} // Маска для Казахстана
                />
              </Form.Item>
              <Button type="primary" size="large" htmlType="submit" block>
                Отправить
              </Button>
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

      <SupportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        phone={phone}
        setPhone={setPhone}
        setStep={setStep}
        step={step}
      />
    </div>
  );
}

export default FieldForm;
