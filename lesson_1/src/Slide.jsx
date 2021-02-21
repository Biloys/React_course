import React from "react";
import "./Slide.scss";

export class Slide extends React.Component {
  render() {
    const api = "https://boring-fe.herokuapp.com/";
    const { isActive, img, title, description } = this.props;
    return (
      <div className={"slide " + `${isActive ? "active" : ""}`}>
        <img className="slide_img" src={api + img} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}
