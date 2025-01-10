import React, { useEffect, useState } from "react";
import { Modal, Button, Input, Form, message, Result } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ApplicationModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // Шаги: 1 - форма заявки, 2 - подтверждение OTP
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(60); // Таймер для повторной отправки OTP
  const [otp, setOtp] = useState("1234"); // Замоканный OTP
  const [inputOtp, setInputOtp] = useState("");
  const [phone, setPhone] = useState(""); // Номер телефона

  const sendOtp = () => {
    if (!phone || phone.length < 11) {
      message.error("Введите корректный номер телефона.");
      return;
    }
    setStep(2);
    setOtpSent(true);
    setTimer(60); // Сброс таймера
    message.success("OTP отправлен!");
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setOtpSent(false);
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleOtpVerification = () => {
    if (inputOtp === otp) {
      message.success("Заявка успешно отправлена!");
      setStep(3); // Переход на шаг 3
    } else {
      message.error("Неверный SMS-код. Попробуйте снова.");
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Отключаем прокрутку при открытом модальном окне
    } else {
      document.body.style.overflow = ""; // Включаем прокрутку
    }
    return () => {
      document.body.style.overflow = ""; // Сбрасываем стиль при размонтировании
    };
  }, [isOpen]);

  return (
    <Modal
      title={
        <div style={{ textAlign: "center" }}>
          {step === 1
            ? "Отправить заявку"
            : step === 2
            ? "Код подтверждения"
            : "Успешно отправлено"}
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      maskClosable={false}
      footer={null}
    >
      {step === 1 && (
        <Form
          layout="vertical"
          onFinish={() => {
            sendOtp();
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
      )}

      {step === 2 && (
        <>
          <p>Введите код из SMS для подтверждения заявки:</p>
          <Input.OTP
            style={{ width: "100%", height: "50px" }}
            length={4}
            type="tel"
            value={inputOtp}
            onChange={(e) => setInputOtp(e)}
            placeholder="Введите OTP-код"
          />
          <Button
            type="primary"
            size="large"
            block
            style={{ marginTop: "10px" }}
            onClick={handleOtpVerification}
          >
            Подтвердить
          </Button>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Центровка по горизонтали
              justifyContent: "center", // Центровка по вертикали
            }}
          >
            <Button
              type="link"
              style={{ marginBottom: "10px" }} // Добавляем отступ между кнопками
              onClick={() => {
                setStep(1); // Вернуться на шаг 1 для смены номера
                setInputOtp(""); // Очистить введенный OTP
              }}
            >
              Сменить номер
            </Button>
            {otpSent ? (
              <p style={{ textAlign: "center" }}>
                Повторная отправка SMS будет доступна через {timer} секунд
              </p>
            ) : (
              <Button type="link" onClick={sendOtp}>
                Отправить OTP снова
              </Button>
            )}
          </div>
        </>
      )}

      {step === 3 && (
        <Result
          status="success"
          title="Заявка успешно отправлена!"
          subTitle="Ожидайте звонка в ближайшее время."
          extra={[
            <Button
              type="primary"
              size="large"
              style={{ marginTop: "20px" }}
              onClick={() => {
                setStep(1);
                setInputOtp("");
                onClose();
              }}
            >
              Хорошо
            </Button>,
          ]}
        />
      )}
    </Modal>
  );
};

export default ApplicationModal;
