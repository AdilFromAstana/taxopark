import React, { useEffect, useRef, useState } from "react";
import { Slider, Checkbox, Row, Col, Card } from "antd";
import { MdOutlineCalendarToday } from "react-icons/md";
import { LuClock3, LuGift } from "react-icons/lu";
import { FiHeadphones } from "react-icons/fi";
import { FaCarSide } from "react-icons/fa6";

const Filters = ({ setFilteredItems }) => {
  const items = [
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "Яндекс.Такси",
      paymentType: "Безналичный расчет",
      supportWorkTime: "Круглосуточно",
      commissionWithdraw: "1% при выводе на карту",
      bonuses: ["Бонус за первые 5 поездок", "Скидка на топливо"],
      commission: 15,
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "Ситимобил",
      paymentType: "Банковская карта",
      supportWorkTime: "08:00 - 22:00",
      commissionWithdraw: "0.5% на карту",
      bonuses: ["Скидка на ТО", "Бесплатная мойка"],
      commission: 12,
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "Убер",
      paymentType: "Безналичный расчет",
      supportWorkTime: "Круглосуточно",
      commissionWithdraw: "1% на карту",
      bonuses: ["Повышенный доход ночью", "Подарки за выполнение планов"],
      commission: 14,
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "Такси.Ру",
      paymentType: "Снятие наличных",
      supportWorkTime: "06:00 - 00:00",
      commissionWithdraw: "0%",
      bonuses: ["Бесплатная техподдержка", "Скидка на запчасти"],
      commission: 10,
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "ГетТакси",
      paymentType: "Безналичный расчет",
      supportWorkTime: "07:00 - 23:00",
      commissionWithdraw: "0.8% на карту",
      bonuses: ["Скидка на страховку", "Увеличенные тарифы в час пик"],
      commission: 13,
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "Таксопарк",
      paymentType: "Снятие наличных",
      supportWorkTime: "09:00 - 21:00",
      commissionWithdraw: "1.2% при выводе",
      bonuses: ["Бесплатный ремонт до 2 раз в месяц"],
      commission: 11,
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "ВезетТакси",
      paymentType: "Банковская карта",
      supportWorkTime: "06:00 - 22:00",
      commissionWithdraw: "0%",
      bonuses: ["Бонус за выполнение 50 заказов", "Скидка на парковку"],
      commission: 10,
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "ДелиМобиль",
      paymentType: "Безналичный расчет",
      supportWorkTime: "Круглосуточно",
      commissionWithdraw: "1.5% на карту",
      bonuses: ["Скидка на аренду авто"],
      commission: 14,
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "FastTaxi",
      paymentType: "Банковская карта",
      supportWorkTime: "07:00 - 23:00",
      commissionWithdraw: "0.3%",
      bonuses: ["Дополнительная смена в подарок"],
      commission: 13,
    },
    {
      image:
        "https://www.shbarcelona.ru/blog/ru/wp-content/uploads/2020/01/oli-woodman-fwYZ3B_QQco-unsplash.jpg",
      title: "GreenRide",
      paymentType: "Безналичный расчет",
      supportWorkTime: "08:00 - 20:00",
      commissionWithdraw: "0.7% на карту",
      bonuses: ["Подарки за рейтинг 4.9+", "Бесплатный техосмотр"],
      commission: 12,
    },
  ];

  const [workDays, setWorkDays] = useState(0);
  const yandexCommission = 7;
  const averageBill = 1200;
  const [orderPerDay, setOrderPerDay] = useState(0);
  const [instantPayment, setInstantPayment] = useState(false);
  const [queuePayment, setQueuePayment] = useState(false);
  const [roundTheClockSupport, setRoundTheClockSupport] = useState(false);
  const [workHoursSupport, setWorkHoursSupport] = useState(false);
  const [limitedSupport, setLimitedSupport] = useState(false);
  const [onlyWithBonuses, setOnlyWithBonuses] = useState(false);
  const debounceTimeout = useRef(null);

  const applyFilters = () => {
    const filtered = items.filter((item) => {
      // if (item.commission > workDays) return false;
      if (onlyWithBonuses && (!item.bonuses || item.bonuses.length === 0)) {
        return false;
      }
      if (roundTheClockSupport && item.supportWorkTime !== "Круглосуточно") {
        return false;
      }
      if (workHoursSupport && !item.supportWorkTime.includes("08:00 - 22:00")) {
        return false;
      }
      if (limitedSupport && item.supportWorkTime !== "Ограниченная") {
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
    instantPayment,
    queuePayment,
    roundTheClockSupport,
    workHoursSupport,
    limitedSupport,
    onlyWithBonuses,
  ]);

  return (
    <Card className="filters-card">
      <h2 className="filters-title">Расчитать доход</h2>
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
            Скорость выплат <LuClock3 fontSize="20px" />
          </h4>
          <div className="filter-checkbox-group">
            <Checkbox
              checked={instantPayment}
              onChange={(e) => setInstantPayment(e.target.checked)}
            >
              Мгновенные
            </Checkbox>
            <Checkbox
              checked={queuePayment}
              onChange={(e) => setQueuePayment(e.target.checked)}
            >
              По очереди
            </Checkbox>
          </div>
        </Col>

        <Col>
          <h4 className="filter-label">
            Поддержка <FiHeadphones fontSize="20px" />
          </h4>
          <div className="filter-checkbox-group">
            <Checkbox
              checked={roundTheClockSupport}
              onChange={(e) => setRoundTheClockSupport(e.target.checked)}
            >
              Круглосуточно
            </Checkbox>
            <Checkbox
              checked={workHoursSupport}
              onChange={(e) => setWorkHoursSupport(e.target.checked)}
            >
              В рабочее время
            </Checkbox>
            <Checkbox
              checked={limitedSupport}
              onChange={(e) => setLimitedSupport(e.target.checked)}
            >
              Ограниченная
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
            Только с бонусами <LuGift fontSize="20px" />
          </h4>
          <div className="filter-checkbox-group">
            <Checkbox
              checked={onlyWithBonuses}
              onChange={(e) => setOnlyWithBonuses(e.target.checked)}
            >
              Только с бонусами
            </Checkbox>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Filters;
