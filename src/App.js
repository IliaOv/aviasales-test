import React, { Component } from "react";
import { Filter } from "./components/Filter/Filter";
import { Tabs } from "./components/Tabs/Tabs";
import { Logo } from "./components/Logo/Logo";
import { Tickets } from "./components/Tickets/Tickets";

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
      <React.Fragment>
        <header className="page__header">
          <Logo />
        </header>
        <main className="page__main">
          <Filter />
          <section className={"container"}>
            <Tabs active={this.state.activeIndex} update={this.toggleClass} />
            <Tickets />
            <Tickets />
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export { App };
