import React, { Component } from "react";
import { Filter } from "./components/Filter/Filter";
import { Tabs } from "./components/Tabs/Tabs";
import "./App.scss";

class App extends Component {
  state = {
    activeIndex: "Самый дешевый"
  };

  toggleClass = item => {
    this.setState({
      activeIndex: item
    });
  };
  render() {
    return (
      <main className="page__main">
        <Filter />
        <Tabs active={this.state.activeIndex} update={this.toggleClass} />
      </main>
    );
  }
}

export { App };
