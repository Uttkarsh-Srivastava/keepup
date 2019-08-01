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
      margin: "auto"
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <PieChart data={this.state.data} radius='40' />
        <div id='legend'>
          <div className='legend-data'>
            <div className='box' id='buy-box' />
            <p>Buy</p>
          </div>
          <div className='legend-data'>
            <div className='box' id='sell-box' />
            <p>Sell</p>
          </div>
          <div className='legend-data'>
            <div className='box' id='hold-box' />
            <p>Hold</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
