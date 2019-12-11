import React, { Component } from "react";
import { StopFilter } from "./components/StopFilter/StopFilter";
import { MostFilter } from "./components/MostFilter/MostFilter";
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
        <StopFilter />
        <MostFilter active={this.state.activeIndex} update={this.toggleClass} />
      </main>
    );
  }
}

export { App };
