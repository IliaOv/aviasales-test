import React, { PureComponent } from "react";
import "./StopFilter.scss";

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
      className="stopfilter__container"
      htmlFor={item + index}
    >
      <input
        key={Math.random()}
        className="stopfilter__checkbox"
        type="checkbox"
        id={item + index}
      />
      <span className="stopfilter__checkmark"></span>
      {item}
    </label>
  ));
}

class StopFilter extends PureComponent {
  render() {
    return (
      <form className="stopfilter">
        <fieldset>
          <p className="stopfilter__header">Количество пересадок</p>
          <ShowTypes />
        </fieldset>
      </form>
    );
  }
}

export { StopFilter };
