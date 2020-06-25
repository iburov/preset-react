import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BlankComponent from "../BlankComponent/BlankComponent";
import "./App.scss";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="app__wrapper">
            <Switch>
              <Route path="/blank-comonent" render={() => <BlankComponent />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
