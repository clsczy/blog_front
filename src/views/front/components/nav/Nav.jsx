import React, { Component } from "react";
import { Menu, Icon, Layout, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

import logo from "@/assets/images/logo.jpg";

const { Header } = Layout;

export default class Nav extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <Header
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
        className="header"
      >
        <div className=" container">
          <Row>
            <Col span={4}>
              <h1>
                <Link to="/">
                  <img src={logo} alt="" style={{ borderRadius: "50%" }} />
                </Link>
              </h1>
            </Col>
            <Col span={15}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item key="1">首页</Menu.Item>
                <Menu.Item key="2">热门</Menu.Item>
                <Menu.Item key="3">其他</Menu.Item>
              </Menu>
            </Col>
            <Col span={5}>
              <div>
                <Button
                  type="primary"
                  icon="login"
                  style={{ marginRight: "15px" }}
                  onClick={this.showLoginModal}
                >
                  登 录
                </Button>
                <Button
                  type="danger"
                  icon="logout"
                  style={{ marginRight: "15px" }}
                  onClick={this.showRegisterModal}
                >
                  注 册
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Header>
    );
  }
}
