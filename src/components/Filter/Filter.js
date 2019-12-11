import React, { PureComponent } from "react";
import "./Filter.scss";

const types = [
  "Все",
  "Без пересадок",
  "1 пересадка",
  "2 пересадки",
  "3 пересадки"
];

function ShowTypes() {
  return types.map((item, index) => (
    <label
      key={Math.random()}
      className="filter__container"
      htmlFor={item + index}
    >
      <input
        key={Math.random()}
        className="filter__checkbox"
        type="checkbox"
        id={item + index}
      />
      <span className="filter__checkmark"></span>
      {item}
    </label>
  ));
}

class Filter extends PureComponent {
  render() {
    return (
      <form className="filter">
        <fieldset>
          <p className="filter__header">Количество пересадок</p>
          <ShowTypes />
        </fieldset>
      </form>
    );
  }
}

export { Filter };
