import React, { Component } from "react";

class Votes extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "0px",
      width: "100%",
      height: "0em",
      margin: "auto"
    };
  };
  render() {
    return (
      <div style={this.getStyle()}>
        <button onClick={this.props.increaseBuy.bind(this)}>Buy</button>
        <button onClick={this.props.increaseSell.bind(this)}>Sell</button>
        <button onClick={this.props.increaseHold.bind(this)}>Hold</button>
      </div>
    );
  }
}

export default Votes;
