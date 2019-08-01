import React, { Component } from "react";

class Votes extends Component {
  render() {
    return (
      <div id='btn'>
        <button onClick={this.props.increaseBuy.bind(this)}>Buy</button>
        <button onClick={this.props.increaseSell.bind(this)}>Sell</button>
        <button onClick={this.props.increaseHold.bind(this)}>Hold</button>
      </div>
    );
  }
}

export default Votes;
