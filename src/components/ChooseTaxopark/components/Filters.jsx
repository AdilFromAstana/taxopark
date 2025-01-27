import React, { useEffect, useRef, useState } from "react";
import { Slider, Checkbox, Row, Col, Card, Select } from "antd";
import { MdOutlineCalendarToday } from "react-icons/md";
import { LuClock3, LuGift } from "react-icons/lu";
import { FiHeadphones } from "react-icons/fi";
import { FaCarSide } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Filters = ({ setFilteredItems }) => {
  const items = [
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "Яндекс.Такси",
      paymentType: "Безналичный расчет",
      supportWorkTime: "Круглосуточно",
      commissionWithdraw: "1% при выводе на карту",
      parkPromotions: ["Приветственные бонусы"],
      commission: 15,
      city: "Астана",
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "Ситимобил",
      paymentType: "Банковская карта",
      supportWorkTime: "08:00 - 22:00",
      commissionWithdraw: "0.5% на карту",
      parkPromotions: ["Бонус за активность"],
      commission: 12,
      city: "Алматы",
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "Убер",
      paymentType: "Безналичный расчет",
      supportWorkTime: "Круглосуточно",
      commissionWithdraw: "1% на карту",
      parkPromotions: ["Гарантированные бонусы"],
      commission: 14,
      city: "Шымкент",
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "Такси.Ру",
      paymentType: "Снятие наличных",
      supportWorkTime: "06:00 - 00:00",
      commissionWithdraw: "0%",
      parkPromotions: ["Приведи друга"],
      commission: 10,
      city: "Астана",
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "ГетТакси",
      paymentType: "Безналичный расчет",
      supportWorkTime: "07:00 - 23:00",
      commissionWithdraw: "0.8% на карту",
      parkPromotions: ["Розыгрыш"],
      commission: 13,
      city: "Алматы",
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "Таксопарк",
      paymentType: "Снятие наличных",
      supportWorkTime: "09:00 - 21:00",
      commissionWithdraw: "1.2% при выводе",
      parkPromotions: ["Приветственные бонусы"],
      commission: 11,
      city: "Шымкент",
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "ВезетТакси",
      paymentType: "Банковская карта",
      supportWorkTime: "06:00 - 22:00",
      commissionWithdraw: "0%",
      parkPromotions: ["Гарантированные бонусы"],
      commission: 10,
      city: "Астана",
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "ДелиМобиль",
      paymentType: "Безналичный расчет",
      supportWorkTime: "Круглосуточно",
      commissionWithdraw: "1.5% на карту",
      parkPromotions: ["Розыгрыш"],
      commission: 14,
      city: "Алматы",
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "FastTaxi",
      paymentType: "Банковская карта",
      supportWorkTime: "07:00 - 23:00",
      commissionWithdraw: "0.3%",
      parkPromotions: ["Приведи друга"],
      commission: 13,
      city: "Шымкент",
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "GreenRide",
      paymentType: "Безналичный расчет",
      supportWorkTime: "08:00 - 20:00",
      commissionWithdraw: "0.7% на карту",
      parkPromotions: ["Бонус за активность"],
      commission: 12,
      city: "Астана",
    },
  ];

  const [supportTimeFilters, setSupportTimeFilters] = React.useState({
    allDay: false,
    limited: false,
  });

  const handleSupportTimeFilters = (filterType) => {
    setSupportTimeFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: !prevFilters[filterType], // Переключаем состояние выбранного фильтра
    }));
  };

  const [workDays, setWorkDays] = useState(25);
  const [orderPerDay, setOrderPerDay] = useState(8);
  const yandexCommission = 7;
  const averageBill = 1200;

  const [parkPromotions, setParkPromotions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isPaymentWithCommission, setIsPaymentWithCommission] = useState(false);

  const debounceTimeout = useRef(null);
  const allParkPromotions = [
    "Гарантированные бонусы",
    "Приветственные бонусы",
    "Розыгрыш",
    "Бонус за активность",
    "Приведи друга",
  ];
  const allCities = [
    { value: "Астана", label: "Астана" },
    { value: "Алматы", label: "Алматы" },
    { value: "Шымкент", label: "Шымкент" },
  ];

  const applyFilters = () => {
    const filtered = items.filter((item) => {
      const hasMatchingCity = !selectedCity || selectedCity === item.city;
      const hasMatchingPromotions =
        parkPromotions.length === 0 ||
        item.parkPromotions?.some((promotion) =>
          parkPromotions.includes(promotion)
        );

      // Логика фильтрации по чекбоксам "Круглосуточно" и "Ограниченное время"
      const matchesAllDay =
        supportTimeFilters.allDay && item.supportWorkTime === "Круглосуточно";
      const matchesLimited =
        supportTimeFilters.limited && item.supportWorkTime !== "Круглосуточно";
      const matchesCheckboxes =
        (!supportTimeFilters.allDay && !supportTimeFilters.limited) ||
        matchesAllDay ||
        matchesLimited;

      // Если условия не выполняются, исключаем элемент
      if (!hasMatchingPromotions || !hasMatchingCity || !matchesCheckboxes) {
        return false;
      }

      return true;
    });

    setFilteredItems(
      filtered.map((item) => {
        return {
          ...item,
          approximateIncome:
            workDays * orderPerDay * averageBill -
            ((yandexCommission + item.commission) / 100) *
              (workDays * orderPerDay * averageBill),
        };
      })
    );
  };

  const debouncedFilter = () => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      applyFilters();
    }, 700);
  };

  useEffect(() => {
    debouncedFilter();
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [
    workDays,
    orderPerDay,
    parkPromotions,
    isPaymentWithCommission,
    selectedCity,
    supportTimeFilters,
  ]);

  return (
    <Card className="filters-card">
      <h2 className="filters-title">Выбрать таксопарк</h2>
      <Row className="filters-grid">
        <Col>
          <h4 className="filter-label">
            Кол-во дней в парке
            <MdOutlineCalendarToday fontSize="20px" />
          </h4>
          <Slider
            min={0}
            max={30}
            value={workDays}
            onChange={setWorkDays}
            tooltip={{ formatter: (value) => value }}
          />
          <span className="filter-value">{workDays}</span>
        </Col>

        <Col>
          <h4 className="filter-label">
            Выплаты <LuClock3 fontSize="20px" />
          </h4>
          <div className="filter-checkbox-group">
            <Checkbox
              checked={isPaymentWithCommission}
              onChange={(e) => setIsPaymentWithCommission(true)}
            >
              С комиссией
            </Checkbox>
            <Checkbox
              checked={!isPaymentWithCommission}
              onChange={(e) => setIsPaymentWithCommission(false)}
            >
              Без комиссии
            </Checkbox>
          </div>
        </Col>

        <Col>
          <h4 className="filter-label">
            Техподдержка <FiHeadphones fontSize="20px" />
          </h4>
          <div className="filter-checkbox-group">
            <Checkbox
              type="checkbox"
              checked={supportTimeFilters.allDay}
              onChange={() => handleSupportTimeFilters("allDay")}
            >
              Круглосуточно
            </Checkbox>
            <Checkbox
              type="checkbox"
              checked={supportTimeFilters.limited}
              onChange={() => handleSupportTimeFilters("limited")}
            >
              Ограниченное время
            </Checkbox>
          </div>
        </Col>

        <Col>
          <h4 className="filter-label">
            Кол-во заказов в день <FaCarSide fontSize="20px" />
          </h4>
          <Slider
            min={0}
            max={50}
            value={orderPerDay}
            onChange={setOrderPerDay}
            tooltip={{ formatter: (value) => value }}
          />
          <span className="filter-value">{orderPerDay}</span>
        </Col>

        <Col>
          <h4 className="filter-label">
            Акции парка <LuGift fontSize="20px" />
          </h4>
          <div className="filter-checkbox-group">
            {allParkPromotions.map((parkPromotion) => {
              return (
                <Checkbox
                  key={parkPromotion}
                  checked={parkPromotions.includes(parkPromotion)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setParkPromotions((parkPromotions) => [
                        ...parkPromotions,
                        parkPromotion,
                      ]);
                    } else {
                      setParkPromotions((parkPromotions) =>
                        parkPromotions.filter((item) => item !== parkPromotion)
                      );
                    }
                  }}
                >
                  {parkPromotion}
                </Checkbox>
              );
            })}
          </div>
        </Col>

        <Col>
          <h4 className="filter-label">
            Город <FaLocationDot fontSize="20px" />
          </h4>
          <div className="filter-select">
            <Select
              style={{ width: "100%" }}
              allowClear
              placeholder="Выберите город"
              options={allCities}
              onChange={setSelectedCity}
              value={selectedCity}
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Filters;
