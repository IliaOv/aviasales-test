import React, {Component} from 'react';
import {Filter} from "./components/Filter/Filter";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Filter />
      </React.Fragment>
    )
  }
}

export {App};