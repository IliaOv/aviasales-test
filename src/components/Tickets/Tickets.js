import React, { PureComponent } from "react";
import "./Tickets.scss";
import logo from "./../../../public/favicon/s7.svg";
import SVG from "react-inlinesvg";

const flights = [];

function Header() {
  return (
    <div className={"ticket__header"}>
      <p className={"ticket__price"}>13 400 р</p>
      <SVG
        src={logo}
        width={110}
        height={36}
        className={"ticket__logo"}
        alt={"Логотип авиаперевозчика"}
      />
    </div>
  );
}

function Flight() {
  return (
    <div className={"flight"}>
      <div className={"flight__route"}>
        <h3 className={"flight__header"}>mow-hkt</h3>
        <p className={"flight__text"}>10:45 – 08:00</p>
      </div>

      <div className={"flight__length"}>
        <h3 className={"flight__header"}>В пути</h3>
        <p className={"flight__text"}>21ч 15м</p>
      </div>

      <div className={"flight__stops"}>
        <h3 className={"flight__header"}>2 пересадки</h3>
        <p className={"flight__text"}>hkg, jnb</p>
      </div>
    </div>
  );
}

class Tickets extends PureComponent {
  render() {
    return (
      <article className={"ticket"}>
        <Header />
        <Flight />
      </article>
    );
  }
}
export { Tickets };
