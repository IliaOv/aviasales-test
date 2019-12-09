import React, { PureComponent } from "react";
import "./MostFilter.scss";

class MostFilter extends PureComponent {
  render() {
    return (
      <div className={'mostfilter'}>
        <div className={'mostfilter__cheap'}>
          Самый дешевый
        </div>
        <div className={'mostfilter__fast'}>
          Самый быстрый
        </div>
      </div>
    );
  }
}

export { MostFilter };
