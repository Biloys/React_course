import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { inject } from "mobx-react";
import { STORE_IDS } from "../../observableStores";
import { BoardsStore } from "../../observableStores/Boards";
import { Counter } from "../../observableStores/Counter";
import { observer } from "mobx-react";

interface DashboardProps extends RouteChildrenProps {
  [STORE_IDS.BOARDS]?: BoardsStore;
  [STORE_IDS.COUNTER]?: Counter;
}

@inject(STORE_IDS.BOARDS)
@inject(STORE_IDS.COUNTER)
@observer
class Dashboard extends React.PureComponent<DashboardProps> {
  goBack = () => {
    this.props.history.goBack();
  };

  public componentDidMount() {
    this.props[STORE_IDS.BOARDS]!.fetchBoards();
  }

  private get store() {
    return this.props[STORE_IDS.BOARDS];
  }

  renderBoards() {
    return this.store!.list.map((item: any) => {
      return <div>{item.name}</div>;
    });
  }

  getCount() {
    const count = this.props[STORE_IDS.COUNTER]?.count;
    return count;
  }

  render() {
    return (
      <div>
        <h2 onClick={this.goBack}>Hello from dashboard</h2>
        <h3>Counter {this.getCount()}</h3>
        <button onClick={() => this.props.counter?.inc()}>+</button>
        <button onClick={() => this.props.counter?.dec()}>-</button>
        {this.renderBoards()}
      </div>
    );
  }
}

export { Dashboard };
