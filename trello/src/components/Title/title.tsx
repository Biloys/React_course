import * as React from "react";
import { Component } from "react";

export class Title extends React.PureComponent<{ text: string }> {
  render() {
    return <div>{this.props.text}</div>;
  }
}
