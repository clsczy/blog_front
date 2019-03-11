import React, { Component } from "react";
import { Icon, Avatar, notification, Button } from "antd";
import { Route, Switch, Link } from "react-router-dom";

import ArticleDetail from "./components/articleDetail/ArticleDetail";
import Comments from "./components/comments/Comments";
import logo from "@/assets/images/logo.jpg";

export class Home extends Component {
  componentWillReceiveProps(val) {
    console.log(this, val);
  }
  render() {
    return (
      <div className="article">
        <ArticleDetail />
        <Comments />
      </div>
    );
  }
}

export default Home;
