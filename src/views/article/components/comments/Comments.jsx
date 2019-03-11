import React, { Component } from "react";
import { Icon, Avatar, notification, Button, Radio } from "antd";
import { Route, Switch, Link } from "react-router-dom";

import logo from "@/assets/images/logo.jpg";
const ButtonGroup = Button.Group;
export class Comments extends Component {
  componentWillReceiveProps(val) {
    console.log(this, val);
  }
  state = {
    size: "large"
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };
  render() {
    const size = this.state.size;
    return (
      <div className="comments-wrap">
        <div className="comments-top">
          <span>11条评论</span>
          <Radio.Group
            value={size}
            onChange={this.handleSizeChange}
            size="small"
          >
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
        </div>
      </div>
    );
  }
}

export default Comments;
