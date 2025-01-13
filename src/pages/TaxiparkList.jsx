import React, { useState } from "react";
import { Table, Tag, Modal, Descriptions } from "antd";

const taxiParks = [
  {
    id: 1,
    phoneNumber: "+77761156416",
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
    id: 2,
    phoneNumber: "+77761156416",
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
    id: 3,
    phoneNumber: "+77761156416",
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
    id: 4,
    phoneNumber: "+77761156416",
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
    id: 5,
    phoneNumber: "+77761156416",
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
    id: 6,
    phoneNumber: "+77761156416",
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
    id: 7,
    phoneNumber: "+77761156416",
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
    id: 8,
    phoneNumber: "+77761156416",
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
    id: 9,
    phoneNumber: "+77761156416",
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
    id: 10,
    phoneNumber: "+77761156416",
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

const TaxiParks = () => {
  const [visible, setVisible] = useState(false);
  const [selectedPark, setSelectedPark] = useState(null);

  const handleRowClick = (record) => {
    setSelectedPark(record);
    setVisible(true);
  };

  const columns = [
    {
      title: "Название",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Телефон",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Город",
      dataIndex: "city",
      key: "city",
      sorter: (a, b) => a.city.length - b.city.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
  ];

  return (
    <>
      <Table
        showHeader
        dataSource={taxiParks}
        columns={columns}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
      <Modal
        title="Taxi Park Details"
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        {selectedPark && (
          <Descriptions bordered>
            <Descriptions.Item label="Name">
              {selectedPark.name}
            </Descriptions.Item>
            <Descriptions.Item label="Contact">
              {selectedPark.contact}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
              {selectedPark.address}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              <Tag color={selectedPark.status === "Active" ? "green" : "red"}>
                {selectedPark.status}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Applications">
              {selectedPark.applications}
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </>
  );
};

export default TaxiParks;
