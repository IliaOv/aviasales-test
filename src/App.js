import React, { Component } from "react";
import { StopFilter } from "./components/StopFilter/StopFilter";
import {MostFilter} from "./components/MostFilter/MostFilter"
import "./App.scss";



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <StopFilter />
        <MostFilter />
      </React.Fragment>
    );
  }
}

export { App };
