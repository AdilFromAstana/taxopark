import logo from "./../logo.svg";
import { Button, Col, Flex, Row, Typography } from "antd";
const { Text } = Typography;

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#F7C600",
        padding: "0px 2.5vw",
      }}
    >
      <Row align="middle">
        <Col span={4}>
          <img alt="logo" src={logo} width="200" />
        </Col>
        <Col span={4}>
          <Flex vertical align="center">
            <span>+7-776-777-77-77</span>
            <span>Круглосуточно</span>
          </Flex>
        </Col>
        <Col span={12}>
          <Row justify="space-evenly">
            <Text strong>Главная</Text>
            <Text strong>Как это работает?</Text>
            <Text strong>Акции и бонусы</Text>
            <Text strong>Контакты</Text>
          </Row>
        </Col>
        <Col span={4}>
          <Button
            style={{
              borderRadius: "24px",
              backgroundColor: "#F7C600",
              color: "black",
              borderColor: "black",
            }}
          >
            Зарегистрироваться
          </Button>
        </Col>
      </Row>
    </header>
  );
}
export default Header;
