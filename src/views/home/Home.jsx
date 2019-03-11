import React, { Component } from "react";
import { Row, Col } from "antd";

import HomeList from "./components/HomeList";
import HomeRight from "./components/homeRight/HomeRight";
export class Home extends Component {
  render() {
    return (
      <div>
        <Row gutter={20}>
          <Col span={16}>
            <HomeList />
          </Col>
          <Col span={8}>
            <HomeRight />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
