import React from "react";
import "./App.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString("en-US"),
      index: 0,
      color: this.getRandomColor(),
    };
  }
  componentDidMount() {
    this.setState({
      timerId: setInterval(() => this.tick(), 100),
    });
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  getRandomColor() {
    return `rgb(
        ${this.getRandomNumber(255)},
        ${this.getRandomNumber(255)},
        ${this.getRandomNumber(255)})`;
  }

  updateTime() {
    this.setState({
      index: this.state.index + 1 < 3 ? this.state.index + 1 : 0,
      color: this.getRandomColor(),
    });
    this.tick();
  }

  getFullTime() {
    this.setState({
      date: new Date().toLocaleTimeString("en-US"),
    });
  }

  getDate() {
    this.setState({
      date: new Date().toLocaleDateString("en-US"),
    });
  }
  getCustomDate() {
    let options = { weekday: "short" };
    const day = new Intl.DateTimeFormat("en-US", options).format(this.date);
    const m = new Date().toLocaleDateString("en-US");
    const t = new Date().toLocaleTimeString("en-US");
    const finalDate = `${day}. ${m}. ${t}`;

    this.setState({
      date: finalDate,
    });
  }

  tick() {
    switch (this.state.index) {
      case 0:
        this.getFullTime();
        break;
      case 1:
        this.getDate();
        break;
      case 2:
        this.getCustomDate();
        break;
      default:
        this.setState({
          date: new Date().toLocaleTimeString("en-US"),
        });
    }
  }

  render() {
    return (
      <div
        className="clock"
        style={{ backgroundColor: this.state.color }}
        onClick={() => this.updateTime()}
      >
        <div className="wrapper">
          <h1 className="time">{this.state.date}</h1>
        </div>
        <div className="description">
          <p>To change the output format, click</p>
          <p>Mode {this.state.index + 1} is currently active</p>
        </div>
      </div>
    );
  }
}
