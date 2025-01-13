import React, { useState } from "react";
import { Table, Tag, Modal, Descriptions } from "antd";

const applications = [
  {
    id: 101,
    clientName: "John Doe",
    taxiPark: "Taxi Park 1",
    contact: "+1122334455",
    date: "2025-01-11",
    status: "New",
  },
  {
    id: 102,
    clientName: "Jane Smith",
    taxiPark: "Taxi Park 2",
    contact: "+2233445566",
    date: "2025-01-10",
    status: "Processed",
  },
];

const Applications = () => {
  const [visible, setVisible] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const handleRowClick = (record) => {
    setSelectedApplication(record);
    setVisible(true);
  };

  const columns = [
    {
      title: "Client Name",
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: "Taxi Park",
      dataIndex: "taxiPark",
      key: "taxiPark",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "New" ? "blue" : "green"}>{status}</Tag>
      ),
    },
  ];

  return (
    <>
      <Table
        dataSource={applications}
        columns={columns}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
      <Modal
        title="Application Details"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        {selectedApplication && (
          <Descriptions bordered>
            <Descriptions.Item label="Client Name">
              {selectedApplication.clientName}
            </Descriptions.Item>
            <Descriptions.Item label="Taxi Park">
              {selectedApplication.taxiPark}
            </Descriptions.Item>
            <Descriptions.Item label="Contact">
              {selectedApplication.contact}
            </Descriptions.Item>
            <Descriptions.Item label="Date">
              {selectedApplication.date}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              <Tag
                color={selectedApplication.status === "New" ? "blue" : "green"}
              >
                {selectedApplication.status}
              </Tag>
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </>
  );
};

export default Applications;
