import React, { Component } from "react";
import PieChart from "react-minimal-pie-chart";

class Charts extends Component {
  state = {
    data: [
      {
        name: "Sell",
        value: this.props.states.sell,
        color: "#E38627"
      },
      {
        name: "Buy",
        value: this.props.states.buy,
        color: "#C13C37"
      },
      {
        name: "Hold",
        value: this.props.states.hold,
        color: "#6A2135"
      }
    ]
  };

  shouldComponentUpdate(nextProp, nextState) {
    this.state.data[0].value = nextProp.states.sell;
    this.state.data[1].value = nextProp.states.buy;
    this.state.data[2].value = nextProp.states.hold;
    return true;
  }

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
        <PieChart data={this.state.data} radius='10' cx={50} cy={13} />
      </div>
    );
  }
}

export default Charts;
