import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Layout, BackTop } from "antd";
import Nav from "./components/nav/Nav";
import Home from "@/views/home/Home";
import Article from "@/views/article/Article";
import NotFound from "@/components/notFound/NotFound";

const { Content, Footer } = Layout;
export class Front extends Component {
  componentDidMount() {}
  render() {
    console.log(this.props);
    return (
      <Layout style={{ background: "#fff" }}>
        <Nav />
        <Content
          className="container"
          style={{ padding: "50px 50px", marginTop: 64 }}
        >
          <div style={{ minHeight: 600 }}>
            <Switch>
              <Route exact path={`/`} component={Home} />
              <Route path={`/article/:article_id`} component={Article} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ccc ©2018 Created by czy
        </Footer>
        <BackTop />
      </Layout>
    );
  }
}

export default Front;
