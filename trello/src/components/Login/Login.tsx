import * as React from "react";
import { Component } from "react";
import { Counter } from "../Counter";
import { Title } from "../Title";
import styles from "./login.module.scss";

const {
  REACT_APP_API_KEY,
  REACT_APP_APP_NAME,
  REACT_APP_REDIRECT_URL,
  REACT_APP_SCOPE,
} = process.env;
const requestUrl = `https://trello.com/1/authorize?return_url=${REACT_APP_REDIRECT_URL}&expiration=1day&name=${REACT_APP_APP_NAME}&scope=${REACT_APP_SCOPE}&response_type=token&key=${REACT_APP_API_KEY}`;

const t: any = [];
for (let i = 0; i < 10; i++) {
  t.push("i:" + i + " " + Date.now());
}

interface LoginState {
  list: Array<string>;
  value: number;
}
interface LoginProps {}

export class Login extends Component<LoginProps, LoginState> {
  state = {
    list: t,
    value: 0,
  };

  asyncUpdate = () => {
    this.setState({ list: [...this.state.list, Date.now()] });
  };
  testUpdate = () => {
    this.setState((state: LoginState) => {
      const list = [...this.state.list];
      list[0] = "HELLO WORLD" + Date.now();
      return { ...state, list };
    });
  };

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };
  doubleIncrement = () => {
    this.setState((state: LoginState) => ({
      ...state,
      value: state.value + 1,
    }));
    this.setState((state: LoginState) => ({
      ...state,
      value: state.value + 1,
    }));
  };
  render() {
    return (
      <div>
        <div className={styles.content}>
          <a className={styles.link} href={requestUrl}>
            Please login with TRELLO
          </a>
        </div>
        <div>
          <button onClick={this.increment}>+</button>
          <button onClick={this.doubleIncrement}>++</button>
          {this.state.value}
        </div>
        <div className="">
          <Counter />
        </div>
        <div>
          <button onClick={this.asyncUpdate}>Add</button>
          <button onClick={this.testUpdate}>Update</button>
          {this.state.list.map((item: any) => (
            <Title text={item} />
          ))}
        </div>
      </div>
    );
  }
}
