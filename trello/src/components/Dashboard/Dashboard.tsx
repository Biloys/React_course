import * as React from "react";
import { RouteChildrenProps } from "react-router";

interface DashboardProps extends RouteChildrenProps {
  token?: string;
}

export class Dashboard extends React.Component<DashboardProps> {
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <h2 onClick={this.goBack}>Some secret text</h2>
      </div>
    );
  }
}
