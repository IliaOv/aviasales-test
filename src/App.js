import React, { Component } from "react";
import { Filter } from "./components/Filter/Filter";
import { Tabs } from "./components/Tabs/Tabs";
import { Logo } from "./components/Logo/Logo";
import { Tickets } from "./components/Tickets/Tickets";

import "./App.scss";

const f = async () => {
  let response = await fetch("https://front-test.beta.aviasales.ru/search");
  let commits = await response.json(); // читаем ответ в формате JSON
  response = await fetch(
    `https://front-test.beta.aviasales.ru/tickets?searchId=${commits.searchId}`
  );
  commits = await response.json();
  //console.log(commits.tickets[1]);
  return commits.tickets[1].price;
};
/*
f()
  .catch(err => console.error(err))
  .then(ticket => {
    console.log(ticket);
  });

fetch("https://front-test.beta.aviasales.ru/search")
  .then(response => response.json())
  .then(commits =>
    fetch(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${commits.searchId}`
    )
      .then(response => response.json())
      .then(commits2 => let ticket = commits2.tickets[1])
  );
*/
class App extends Component {
  state = {
    activeIndex: "Самый дешевый",
    ticket: 1,
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
            <Tickets price={this.state.ticket}/>
            <Tickets />
            <Tickets />
            <Tickets />
            <Tickets />
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export { App };
