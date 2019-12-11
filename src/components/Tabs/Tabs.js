import React, { PureComponent } from "react";
import cx from "classnames";
import "./Tabs.scss";

const types = ["Самый дешевый", "Самый быстрый"];
const classes = ["tabs__type_cheap", "tabs__type_fast"];

function ShowTypes(props) {
  return types.map((item, index) => (
    <div
      key={index}
      className={cx(
        "tabs__type",
        classes[index],
        item === props.active ? "tabs__type_active" : null
      )}
      onClick={() => {
        props.update(item);
      }}
    >
      {item}
    </div>
  ));
}

class Tabs extends PureComponent {
  render() {
    const { active, update } = this.props;
    return (
      <div className="tabs">
        <ShowTypes active={active} update={update} />
      </div>
    );
  }
}

export { Tabs };
