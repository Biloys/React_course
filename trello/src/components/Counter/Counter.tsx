import React from "react";
import { MyCoolStore } from "../../observableStores/MyCoolStore";

interface Props {
  value?: MyCoolStore;
}

export class Counter extends React.PureComponent<Props> {
  render() {
    return <h2>{this.props.value}</h2>;
  }
}
