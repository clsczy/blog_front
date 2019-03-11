import React, { Component } from "react";
import {Link} from 'react-router-dom'
class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{textAlign:'center', position: 'relative',
    top: '20%' }}>
        <i className="iconfont" style={{ fontSize: "160px",    color: 'indianred' }}>
          &#xe6c7;
        </i>
        <p style={{fontSize: '20px'}}>找不到页面......<Link to='/' style={{color: "#2d78f4"}}>返回首页</Link></p>
      </div>
    );
  }
}

export default NotFound;
