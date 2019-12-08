import React, { Component } from "react";
import "./StopFilter.scss";

class StopFilter extends Component {
  render() {
    return (
      <form>
        <fieldset className={"filter"}>
          <p className={"filter__header"}>Количество пересадок</p>
          <label className={"filter__container"} htmlFor="all">
            <input className={"filter__checkbox"} type="checkbox" id="all" />
            <span className={"filter__checkmark"}></span>
            Все
          </label>
          <label className={"filter__container"} htmlFor="no">
            <input className={"filter__checkbox"} type="checkbox" id="no" />
            <span className={"filter__checkmark"}></span>
            Без пересадок
          </label>
          <label className={"filter__container"} htmlFor="one">
            <input className={"filter__checkbox"} type="checkbox" id="one" />
            <span className={"filter__checkmark"}></span>1 пересадка
          </label>
          <label className={"filter__container"} htmlFor="two">
            <input className={"filter__checkbox"} type="checkbox" id="two" />
            <span className={"filter__checkmark"}></span>2 пересадки
          </label>
          <label className={"filter__container"} htmlFor="three">
            <input className={"filter__checkbox"} type="checkbox" id="three" />
            <span className={"filter__checkmark"}></span>3 пересадки
          </label>
        </fieldset>
      </form>
    );
  }
}

export { StopFilter };
