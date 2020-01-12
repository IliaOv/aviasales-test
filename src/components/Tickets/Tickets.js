import React, { PureComponent } from "react";
import "./Tickets.scss";

function Header(props) {
  return (
    <div className={"ticket__header"}>
      <p className={"ticket__price"}>{props.price}</p>
      <i className={"ticket__logo"}></i>
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
        <p className={"flight__text"}>HKG, JNB</p>
      </div>
    </div>
  );
}

class Tickets extends PureComponent {
  render() {
    const { price } = this.props;
    return (
      <article className={"ticket"}>
        <Header price={price} />
        <Flight />
        <Flight />
      </article>
    );
  }
}
export { Tickets };
