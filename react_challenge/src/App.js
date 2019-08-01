import React, { Component } from "react";
import "./App.css";
import Votes from "./components/Votes";
import Charts from "./components/Charts";

class App extends Component {
  state = {
    sell: 45,
    buy: 5,
    hold: 84
  };

  increaseBuy = () => {
    this.setState({ buy: this.state.buy + 1 });
  };
  increaseSell = () => {
    this.setState({ sell: this.state.sell + 1 });
  };
  increaseHold = () => {
    this.setState({ hold: this.state.hold + 1 });
  };
  render() {
    return (
      <div>
        <Charts states={this.state} />
        <Votes
          states={this.state}
          increaseBuy={this.increaseBuy}
          increaseHold={this.increaseHold}
          increaseSell={this.increaseSell}
          
        />
      </div>
    );
  }
}

export default App;
