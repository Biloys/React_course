import React from "react";
import { InfoBox } from "./infoBox";
import "./App.scss";

export class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <InfoBox />
      </div>
    );
  }
}
