import React, { Component } from "react";
import "./Filter.scss";

class Filter extends Component {
  render() {
    return (
      <form>
        <fieldset className={"filter"}>
          <p className={"filter__header"}>Количество пересадок</p>
          <div className={"filter__container"}>
            <label className={"filter__text"} htmlFor="all">
              <input className={"filter__checkbox"} type="checkbox" id="all" />
              <span className={"filter__checkmark"}></span>
              Все
            </label>
          </div>
          <div className={"filter__container"}>
            <label className={"filter__text"} htmlFor="no">
              <input className={"filter__checkbox"} type="checkbox" id="no" />
              <span className={"filter__checkmark"}></span>
              Без пересадок
            </label>
          </div>
          <div className={"filter__container"}>
            <label className={"filter__text"} htmlFor="one">
              <input className={"filter__checkbox"} type="checkbox" id="one" />
              <span className={"filter__checkmark"}></span>1 пересадка
            </label>
          </div>
          <div className={"filter__container"}>
            <label className={"filter__text"} htmlFor="two">
              <input className={"filter__checkbox"} type="checkbox" id="two" />
              <span className={"filter__checkmark"}></span>2 пересадки
            </label>
          </div>
          <div className={"filter__container"}>
            <label className={"filter__text"} htmlFor="three">
              <input
                className={"filter__checkbox"}
                type="checkbox"
                id="three"
              />
              <span className={"filter__checkmark"}></span>3 пересадки
            </label>
          </div>
        </fieldset>
      </form>
    );
  }
}

export { Filter };
