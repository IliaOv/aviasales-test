import React, { PureComponent } from "react";
import "./StopFilter.scss";

const types = [
  "Все",
  "Без пересадок",
  "1 пересадка",
  "2 пересадки",
  "3 пересадки"
];

const types_label = ["all", "no", "stop_1", "stop_2", "stop_3"];

function ShowTypes() {
  return types.map((item, index) => (
    <label
      key={Math.random()}
      className={"filter__container"}
      htmlFor={types_label[index]}
    >
      <input
        key={Math.random()}
        className={"filter__checkbox"}
        type="checkbox"
        id={types_label[index]}
      />
      <span className={"filter__checkmark"}></span>
      {item}
    </label>
  ));
}

class StopFilter extends PureComponent {
  render() {
    return (
      <form>
        <fieldset className={"filter"}>
          <p className={"filter__header"}>Количество пересадок</p>
          <ShowTypes />
        </fieldset>
      </form>
    );
  }
}

export { StopFilter };
