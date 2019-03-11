import React, { Component } from "react";
import { Icon, Avatar, notification } from "antd";
import logo from "@/assets/images/logo.jpg";
import "./articleDetail.less";
export class ArticleDetail extends Component {
  render() {
    return (
      <div className="article-detail-wrap">
        <h3 className="title">redux-saga框架使用详解及Demo教程</h3>
        <div className="article-info">
          <a className="avatar" href="">
            <Avatar className="auth-logo" src={logo} size={50} icon="user" />
          </a>
          <div className="info">
            <span className="name">
              <a href="">{"佚名"}</a>
            </span>

            <div className="meta">
              <span className="publish-time">2018-11-25 17:59:39</span>
              <span className="views-count">阅读 {222}</span>
              <span className="comments-count">评论 {3}</span>
              <span className="likes-count">喜欢 {8}</span>
            </div>
          </div>
          <div className="tags " title="标签">
            <Icon type="tags" theme="outlined" />
            <span className="tag">Javascript</span>
            <span className="tag">React</span>
          </div>
        </div>
        <article className="article-detail">
          这意味着应用的逻辑会存在两个地方： Reducers 负责处理 action 的 state
          更新 Sagas 负责协调那些复杂或异步的操作
          Sagas是通过Generator函数来创建的，如果有不熟悉
          Generator函数使用的，请查看阮老师对Generator的介绍 Sagas
          不同于thunks，thunks 是在action被创建时调用，而
          Sagas只会在应用启动时调用（但初始启动的 Sagas 可能会动态调用其他
          Sagas），Sagas 可以被看作是在后台运行的进程，Sagas
          监听发起的action，然后决定基于这个
          action来做什么：是发起一个异步调用（比如一个 fetch
          请求），还是发起其他的action到Store，甚至是调用其他的 Sagas 在
          redux-saga 的世界里，所有的任务都通用 yield Effects 来完成（Effect
          可以看作是 redux-saga 的任务单元）。Effects 都是简单的 Javascript
          对象，包含了要被 Saga middleware 执行的信息（打个比方，你可以看到
          Redux action其实是一个个包含执行信息的对象）， redux-saga
          为各项任务提供了各种Effect创建器，比如调用一个异步函数，发起一个action到Store，启动一个后台任务或者等待一个满足某些条件的未来的
          action
        </article>
      </div>
    );
  }
}

export default ArticleDetail;
