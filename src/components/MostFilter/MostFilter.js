import React, { PureComponent } from "react";
import cx from "classnames";
import "./MostFilter.scss";

const types = ["Самый дешевый", "Самый быстрый"];
const classes = ["mostfilter__type_cheap", "mostfilter__type_fast"];

function ShowTypes(props) {
  return types.map((item, index) => (
    <div
      key={index}
      className={cx(
        "mostfilter__type",
        classes[index],
        item === props.active ? "mostfilter__type_active" : null
      )}
      onClick={() => {
        props.update(item);
      }}
    >
      {item}
    </div>
  ));
}

class MostFilter extends PureComponent {
  render() {
    return (
      <div className="mostfilter">
        <ShowTypes active={this.props.active} update={this.props.update} />
      </div>
    );
  }
}

export { MostFilter };
