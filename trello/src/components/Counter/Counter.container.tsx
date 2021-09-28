import { inject, observer } from "mobx-react";
import { Counter } from "./Counter";
import * as React from "react";
import { STORE_IDS } from "../../observableStores";

@inject(STORE_IDS.CollStore)
@observer
class CounterContainer extends React.PureComponent<any> {
  render() {
    const value = this.props[STORE_IDS.CollStore].value;
    return <Counter value={value} />;
  }
}

export { CounterContainer };
