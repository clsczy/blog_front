import React, { Component } from "react";
import { Link } from "react-router-dom";

import { List, Avatar, Button, Skeleton, Icon, Divider } from "antd";
import "./homeRight.less";
import logo from "@/assets/images/logo.jpg";
export default class HomeRight extends Component {
  state = {
    items: ["React", "Vue", "js", "html", "css", "db", "sever", "less"]
  };
  render() {
    const { items } = this.state;
    return (
      <div className="home-right">
        <Avatar size={100} src={logo} />
        <p className="desc">不秃怎么变强 !!!</p>
        <Divider />
        <div className="intro">小试牛刀</div>
        <Divider />
        <h3>技术标签</h3>
        <div className="items">
          {items.map(item => (
            <a href="" className="item" key={item}>
              <span>{item}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }
}
