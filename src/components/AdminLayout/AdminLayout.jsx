import React from "react";
import { Layout, Menu } from "antd";
import { useLocation } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

const { Sider, Content } = Layout;

function getItem(label, key, icon) {
  return {
    label,
    key,
    icon,
  };
}

const AdminLayout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    getItem("Таксопарки", "/admin/parks", <BsPeopleFill />),
    getItem("Заявки", "/admin/applications", <CgFileDocument />),
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible width={256}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Content
          style={{ margin: "16px", background: "#fff", padding: "24px" }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
