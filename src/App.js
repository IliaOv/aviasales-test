import React, { Component } from "react";
import { StopFilter } from "./components/StopFilter/StopFilter";
import "./App.scss";



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <StopFilter />
      </React.Fragment>
    );
  }
}

export { App };
