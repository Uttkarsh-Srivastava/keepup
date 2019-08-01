import React, { Component } from "react";

class Votes extends Component {
  getStyle = () => {
    return {};
  };
  render() {
    return (
      <div id='btn' style={this.getStyle()}>
        <button onClick={this.props.increaseBuy.bind(this)}>Buy</button>
        <button onClick={this.props.increaseSell.bind(this)}>Sell</button>
        <button onClick={this.props.increaseHold.bind(this)}>Hold</button>
      </div>
    );
  }
}

export default Votes;
