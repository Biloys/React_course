import React from "react";
import "./infoBox.scss";

const red = [
  {
    title: "Time to Share: 6 for $3.99*",
    img: "images/comp_plate_promo1_wsmolg.png",
    description:
      "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
    note:
      "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
    id: 1,
  },
  {
    title: "Rise 'n shine",
    img: "images/comp_plate_promo2_nlqjfe.png",
    description:
      "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
    note:
      "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
    id: 2,
  },
  {
    title: "PM Snackers: Brownie Bites",
    img: "images/comp_plate_promo4_f87x7g.png",
    description:
      "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
    note:
      "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
    id: 3,
  },
  {
    title: "PM Snackers: Brownie Bites 2",
    img: "images/comp_plate_promo3_wnp43x.png",
    description:
      "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
    note:
      "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
    id: 4,
  },
];

const api = "https://boring-fe.herokuapp.com/";

export class InfoBox extends React.Component {
  state = {
    activeIndex: 0,
  };

  renderSlide() {
    return red.map((slide, i) => {
      const isActive = this.state.activeIndex === i;
      return (
        <div
          key={slide.id}
          className={"slide " + `${isActive ? "active" : ""}`}
        >
          <img className="slide_img" src={api + slide.img} alt="" />
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </div>
      );
    });
  }

  decIndex() {
    this.setState({
      activeIndex:
        this.state.activeIndex >= 1
          ? this.state.activeIndex - 1
          : red.length - 1,
    });
  }

  incIndex() {
    this.setState({
      activeIndex:
        this.state.activeIndex + 1 < red.length
          ? this.state.activeIndex + 1
          : 0,
    });
  }
  render() {
    return (
      <div className="info-box">
        <div className="slides">{this.renderSlide()}</div>
        <div className="control">
          <button onClick={() => this.decIndex()}>{"<<"}</button>
          <button onClick={() => this.incIndex()}>{">>"}</button>
        </div>
      </div>
    );
  }
}
