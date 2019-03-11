import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Front from "./front/Front";
import NotFound from "@/components/notFound/NotFound";

import "@/assets/style/index.less";
class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path={`/:lang/expoid-:id`} component={Front} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
